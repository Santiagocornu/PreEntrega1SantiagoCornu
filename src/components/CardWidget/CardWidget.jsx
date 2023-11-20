import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>

      <Link to="/cart">
        <img src="https://i.pinimg.com/564x/db/9f/06/db9f063dca6904b2c01cb33571cb65b1.jpg" alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }

      </Link>
    </div>
  )
}

export default CartWidget