import React, { useState, useEffect } from 'react';
import { getProductos,getProductosPorCategoria } from '../../services/firebase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const {idCat} = useParams();

  useEffect(() => {
    const funcionProductos = idCat ? getProductosPorCategoria : getProductos;
    
    funcionProductos(idCat)
      .then(res => setProductos(res))
      .catch(e => {
        console.error("Hubo un error al obtener los datos:", e);
      });
  }, [idCat]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;