import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import {NavLink, Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>no hay productos dentro del carrito </h2>
                <NavLink to="/"><button>Ver Productos</button></NavLink>
            </>
        )
    }

    return (
        <div>
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <NavLink to="/checkout"><button>Finalizar Compra</button></NavLink>
            <NavLink to="/"><button>volver</button></NavLink>
        </div>
    )
}

export default Cart