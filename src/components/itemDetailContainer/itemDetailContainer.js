import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/itemDetail';
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(()=> {
        //le decimos nuestra base de datos y en que collection esta
        const productCollection = collection(db, 'items')
        //hacer referencia que me traiga el id
        const docReference = doc(productCollection, id)
        //traemos un documento
        getDoc(docReference)
        .then((res)=> {
            setProd({
            id:res.id,
            ...res.data()
          })
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
      }, [])
    

    const onAdd = (value) => {
        alert(value);
    }

    return (
        <div className='item'>
            {loading && 'cargando...'}
            {prod && <ItemDetail item={prod} />}
        </div>
    )
}

export default ItemDetailContainer;