import React, { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../itemList/itemList';
import productos from '../../api/productos';
import { customFetch } from '../../api/customFetch';
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { greeting } = props;
  const { id } = useParams();


  // const array = [{ nombre: "Torta brownie", precio: "$2800" }, { nombre: "Torta brownie 2", precio: "$3000" }];

  useEffect(() => {
    customFetch(productos)
      .then((res) => {
        if (id) {
          setProds(res.filter((item) => item.category === id))
        } else {
          setProds(res)
        }
        setLoading(false);
      }
      )
  }, [])

  return (
    <>
      {loading && 'cargando...'}
      <ItemList items={prods}></ItemList>
      <p>{greeting}</p>


    </>
  )
}

export default ItemListContainer;