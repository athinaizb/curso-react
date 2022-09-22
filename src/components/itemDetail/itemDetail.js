import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {

    const { nombre, precio, stock, detail, img } = item;


    const onAdd = (value) => {
        alert(value);
    }

    return (
        <>
            <h1 className='item-title'>{nombre}</h1>
             {precio && <h3>${precio}</h3>}
            <h3 className='item-detail'>{detail}</h3>
            {img && <img className='item-img' src={img}></img>}
        </>
    )
}

export default ItemDetail;