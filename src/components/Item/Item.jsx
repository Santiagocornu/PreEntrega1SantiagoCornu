import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

function Item({id, nombre, precio, img,stock}) {
  return (
    <div className='Item'>
      <img src={img} alt={nombre} />
      <h3> {nombre} </h3>
      <p>${precio}</p>
      <p>id:{id}</p>
      <Link to={`/Item/${id}`}><button>ver detalles</button></Link>
      <p>stock disponible:{stock}</p>
       </div>
  )
}

export default Item