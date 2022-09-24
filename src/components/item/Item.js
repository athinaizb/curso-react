import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../itemDetail/itemDetail';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {

    const { nombre, precio, stock, detail, img, id } = item;

    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/item/${id}`);
    }



    return (
        <div className='item' onClick={clickHandler}>
            <ItemDetail item={item} />

        </div>
    )
}

export default Item;