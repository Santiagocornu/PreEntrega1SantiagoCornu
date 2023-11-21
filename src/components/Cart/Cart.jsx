import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import {NavLink, Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
            <div className="uwu">
                <div className="nocarrito">
                <h2 className="testo">no hay productos dentro del carrito </h2>
                <NavLink to="/"><button>Ver Productos</button></NavLink>
                </div>
                </div>
            </>
        )
    }

    return (
        <div className="uwu">
            <div className="sicarrito">
            <div className="testo">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            </div>
            <div className="testo">
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            </div>
            <div className="carritobuton">
            <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <NavLink to="/checkout"><button>Finalizar Compra</button></NavLink>
            <NavLink to="/"><button>volver</button></NavLink>
            </div>
            </div>
        </div>
    )
}

export default Cart