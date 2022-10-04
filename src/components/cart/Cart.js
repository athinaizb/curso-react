import React from 'react'
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useCart();
    return (
        <>
            {cart.map(producto => (
                <p key={producto.id}>{producto.nombre} ${producto.precio} cantidad: {producto.quantity}</p>

            )
            )}
        </>

    )
}

export default Cart;