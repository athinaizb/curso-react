import React from 'react'
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return (
        <header className='header'>
            <img src="../../assets/logo.png" className='logo' ></img>
            <div className='nav-content'>

                <h1 className='titulo'>Athina pastelería</h1>
                <nav>
                    <a href="" className='link'>Inicio</a>
                    <a href="" className='link'>Nosotros</a>
                    <a href="" className='link'>Productos</a>
                    <CartWidget/>
                </nav>
            </div>

        </header>
    )
}

export default NavBar;