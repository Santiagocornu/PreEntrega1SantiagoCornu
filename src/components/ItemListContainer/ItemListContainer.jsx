import React from 'react'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
    },[])
  return (
<>
    <ItemList productos = {productos}/>
</>
  )
}

export default ItemListContainer