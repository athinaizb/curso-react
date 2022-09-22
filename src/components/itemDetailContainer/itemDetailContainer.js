import React, { useState, useEffect } from 'react'
import { customFetch } from '../../api/customFetch';
import ItemDetail from '../itemDetail/itemDetail';

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({});
    const producto = {
        id: 1,
        nombre: "Item ejemplo",
        precio: 2500,
        stock: 10,
        detail: "item de ejemplo usando item detail container(hasta usar routes)",
        img: 'https://i.ibb.co/CbWzgcF/brownie.jpg'
    };
    useEffect(() => {
        customFetch(producto)
            .then(data => setProd(data))
    }, [])

    return (
        <div className='item'>
            <ItemDetail item={prod} />
        </div>
    )
}

export default ItemDetailContainer;