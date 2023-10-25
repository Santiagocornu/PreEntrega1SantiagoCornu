import React, { useState, useEffect } from 'react';
import { getProductos, getCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const {idCat} = useParams();

  useEffect(() => {
    const funcionProductos = idCat ? getCategoria : getProductos;

    funcionProductos(idCat)
      .then(res => setProductos(res))
      .catch(e => console.log(e));
  }, [idCat]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;