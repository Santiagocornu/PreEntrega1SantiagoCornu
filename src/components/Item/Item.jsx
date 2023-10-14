import React from 'react'

import "./Item.css"

function Item({id, nombre, precio, img}) {
  return (
    <div className='Item'>
      <img src={img} alt={nombre} />
      <h3>nombre: {nombre}</h3>
      <p>precio:{precio}</p>
      <p>id:{id}</p>
      <button>ver detalles</button>
       </div>
  )
}

export default Item