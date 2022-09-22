import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../itemDetail/itemDetail';

const Item = ({ item }) => {

    const { nombre, precio, stock, detail, img } = item;


    const onAdd = (value) => {
        alert(value);
    }

    return (
        <div className='item'>
            <ItemDetail item={item} />
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </div>
    )
}

export default Item;