import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../itemDetail/itemDetail';

const Item = ({ item }) => {

    const { nombre, precio, stock, detail, img, id } = item;

    return (
        <div className='item' >
            <ItemDetail item={item}/>

        </div>
    )
}

export default Item;