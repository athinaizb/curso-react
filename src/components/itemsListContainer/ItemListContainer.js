import React, { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../itemList/itemList';
import productos from '../../api/productos';
import { customFetch } from '../../api/customFetch';

const ItemListContainer = (props) => {
  const [prods, setProds] = useState([]);
  const { greeting } = props;


  // const array = [{ nombre: "Torta brownie", precio: "$2800" }, { nombre: "Torta brownie 2", precio: "$3000" }];

  useEffect(() => {
    customFetch(productos)
    .then(data=> setProds(data))
  },[])

  return (
    <>
      <ItemList items = {prods}></ItemList>
      <p>{greeting}</p>
  
    </>
  )
}

export default ItemListContainer;