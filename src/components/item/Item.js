import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ item }) => {

    const { nombre, precio, stock, detail, img } = item;


    const onAdd = (value) => {
        alert(value);
    }

    return (
        <div className='item'>
            <h1 className='item-title'>{nombre}</h1>
            <h3>${precio}</h3>
            <h3 className='item-detail'>{detail}</h3>
            <img className='item-img' src={img}></img>
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </div>
    )
}

export default Item;