import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
const ItemListContainer = (props) => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { greeting } = props;
  const { id } = useParams();


  useEffect (()=> {
    setLoading(true)
    const products = id ? query( collection(db, "items"), where("category", "==", id) ) : collection(db, "items")
    getDocs(products)
    .then((res)=> {
      const list = res.docs.map((product)=> {
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProds(list)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }, [id]);


  return (
    <>
      {!loading && <p className='saludo-inicial'>{greeting}</p>}
      {loading && 'cargando...'}
      <ItemList items={prods}></ItemList>
    </>
  )
}

export default ItemListContainer;