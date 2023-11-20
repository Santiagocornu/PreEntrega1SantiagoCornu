import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const {idItem}=useParams();
    
  return (
    <>
      <ItemDetail id={idItem}/>
    </>
  )
}

export default ItemDetailContainer
