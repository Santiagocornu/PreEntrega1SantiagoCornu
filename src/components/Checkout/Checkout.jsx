import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/firebase";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import './Checkout.css'


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
            setTimeout(() => setError(null), 10000);
            return;
        }
        if(email !== emailConfirmacion) {
            setError("email mal");
            setTimeout(() => setError(null), 10000);
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
                setTimeout(() => setError(null), 10000);
            })
        })
        .catch((error) => {
            console.log(error);
            setError("error con el stock");
            setTimeout(() => setError(null), 10000);
        })

    }

  return (
    <div className="checkoutparent">
        <div className="checkout">
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario} className="formulario">
            <div className="testo">
            {
                    
                carrito.map(producto => (
                    <>
                    <div key={producto.item.id} className="row">
                        <img src={producto.item.img}></img>
                        <div className="testo2">
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p>${producto.item.precio}</p>
                        </div>
                        
                    </div>
                    <hr />
                    </>
                ))
            }
            </div>
            <div className="testo">
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
            </div>
            <div className="checkoutbuton">
            <button type="submit"> Confirmar Compra </button>
            <NavLink to="/"><button>volver</button></NavLink>
            </div>
            {
                ordenId && (
                    <strong className="orderId">¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
                )
            }

        </form>
        </div>
    </div>
  )
}

export default Checkout