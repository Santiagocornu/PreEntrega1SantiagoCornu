import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const {idItem}=useParams();
    
  return (
    <>
    <div className='parent'>
    <div className='body'>
      <ItemDetail id={idItem}/>
      </div>
      </div>
    </>
  )
}

export default ItemDetailContainer
