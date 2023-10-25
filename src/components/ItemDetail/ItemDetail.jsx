import React, { useEffect, useState } from 'react'
import { getProductos } from '../../asyncmock';
import { Link } from 'react-router-dom';
import { sumarCont, restarCont } from '../customHooks/CustomHooks';

const ItemDetail = ({id}) => {
  const [itemData, setItemData]= useState(null);
  const [cont,setCont]=useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    getProductos().then(productos =>{
      const item = productos.find(product => product.id === Number(id));
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
          <p>${itemData.precio}</p>
          <p>id:{itemData.id}</p>
          <button onClick={() => setCont(sumarCont(cont,itemData.stock))}>+</button>
          <p>{cont}</p>
          <button onClick={() => setCont(restarCont(cont,itemData.stock))}>-</button>
          <p>stock disponible:{itemData.stock}</p>
          <Link to="/">volver</Link>
        </>
      ) : (
        <p>No se encontró el producto</p>
      )
    )}
    </div>
  )
}

export default ItemDetail