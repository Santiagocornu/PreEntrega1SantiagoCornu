import React, { useEffect, useState, useContext } from 'react'
import { getProductos } from '../../services/firebase';
import { Link } from 'react-router-dom';
import { sumarCont, restarCont } from '../customHooks/CustomHooks';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({id, nombre, stock, img}) => {
  const [itemData, setItemData]= useState(null);
  const [cont,setCont]=useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarAlCarrito} = useContext(CarritoContext);

  const handleCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    agregarAlCarrito(itemData, cantidad);
}

  useEffect(()=>{
      getProductos().then(productos =>{
          const item = productos.find(product => product.id === id);
          setItemData(item);
          setIsLoading(false);
      });
  },[id]);

  return (
      <div className='Item'>
      {isLoading ? (
          <p>Cargando...</p>
      ) : (
          itemData ? (
              <>
                  <img src={itemData.img} alt={itemData.nombre} />
                  <h3> {itemData.nombre} </h3>
                  <p>${itemData.precio}</p> {/* Display the precio from the database */}
                  <p>id:{itemData.id}</p>
                  <button onClick={() => setCont(sumarCont(cont,itemData.stock))}>+</button>
                  <p>{cont}</p>
                  <button onClick={() => setCont(restarCont(cont,itemData.stock))}>-</button>
                  <p>stock disponible:{itemData.stock}</p>
                  {
                      agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<button onClick={() => handleCantidad(cont)}>agregar al carrito</button>)
                  }
              </>
          ) : (
              <p>No se encontró el producto</p>
          )
      )}
      </div>
  )
}

export default ItemDetail