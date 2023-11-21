import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { NavLink } from 'react-router-dom';
import './CardWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div >

      <NavLink to="/cart">
        <img className='imgcar' src="https://i.pinimg.com/564x/db/9f/06/db9f063dca6904b2c01cb33571cb65b1.jpg" alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <div className='numbre'> {cantidadTotal} </div>
        }

      </NavLink>
    </div>
  )
}

export default CartWidget