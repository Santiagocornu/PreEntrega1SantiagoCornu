import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
    <div className="row">
      <img src={item.img}></img>
      <div>
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        </div>
       
    </div>
    <hr />
    </div>
  )
}

export default CartItem