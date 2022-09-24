import React, { useState, useEffect } from 'react'
import { customFetch } from '../../api/customFetch';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../itemDetail/itemDetail';
import productos from '../../api/productos';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        customFetch(productos)
            .then((res) => {
                setProd(
                    res.find((item) => item.id === Number(id)))
                setLoading(false);
            }
            )
    }, [])

    const onAdd = (value) => {
        alert(value);
    }

    return (
        <div className='item'>
            {loading && 'cargando...'}
            {prod && <> <ItemDetail item={prod} />
                <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
            </>}

        </div>
    )
}

export default ItemDetailContainer;