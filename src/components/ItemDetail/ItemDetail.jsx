import React, { useEffect, useState, useContext } from 'react'
import { getProductos } from '../../services/firebase';
import { Link, NavLink } from 'react-router-dom';
import { sumarCont, restarCont } from '../customHooks/CustomHooks';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css'

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
      <div className='itemDetail'>
      {isLoading ? (
          <p>Cargando...</p>
      ) : (
          itemData ? (
              <>
                  <img className="imagen" src={itemData.img} alt={itemData.nombre} />
                  <div className='display'> 
                  <h3> {itemData.nombre} </h3>
                  <p> {itemData.id}</p>
                  <p>${itemData.precio}</p> {/* Display the precio from the database */}
                  <div className='buttons'>
                  <button onClick={() => setCont(sumarCont(cont,itemData.stock))}>+</button>
                  <p>{cont}</p>
                  <button onClick={() => setCont(restarCont(cont,itemData.stock))}>-</button>
                  </div>
                  <p>stock disponible: {itemData.stock}</p>
                  <div className='but'>
                  {
                      agregarCantidad > 0 ? (<><NavLink to="/cart"><button>Terminar Compra</button></NavLink><NavLink to="/"><button>volver</button></NavLink></>) : (<><button onClick={() => handleCantidad(cont)}>agregar al carrito</button><NavLink to="/"><button>volver</button></NavLink></>)
                  }
                  </div>
                  </div>
                  
              </>
          ) : (
              <p>No se encontró el producto</p>
          )
      )}
      </div>
  )
}

export default ItemDetail