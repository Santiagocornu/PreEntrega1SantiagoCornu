import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/firebase";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState(""); 
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext);

    

    const manejadorFormulario = (event) => {
        event.preventDefault();

        
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("llenar todos los campos");
            return;
        }
        if(email !== emailConfirmacion) {
            setError("email mal");
            return;
        }
        const orden = {
            items: carrito.map(producto => {
                if (!producto.item.nombre || !producto.cantidad) {
                    throw new Error(`Producto inválido en el carrito: ${JSON.stringify(producto)}`);
                }
                return {
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                };
            }),
            total: total,
            fecha: new Date(),
            nombre, 
            apellido,
            telefono, 
            email
        };
        Promise.all(
            orden.items.map( async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
                
            })
        )
        .then(() => {
            
            addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch( error => {
                console.log(error);
                setError("error de orden");
            })
        })
        .catch((error) => {
            console.log(error);
            setError("error con el stock");
            
        })

    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario} className="formulario">
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p>{producto.item.precio}</p>
                        <hr />
                    </div>
                ))
            }
            <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=> setTelefono(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="">Email Confirmación</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button type="submit"> Confirmar Compra </button>

            {
                ordenId && (
                    <strong className="orderId">¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
                )
            }

        </form>
    </div>
  )
}

export default Checkout