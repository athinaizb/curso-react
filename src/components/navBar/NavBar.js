import React from 'react'
import CartWidget from '../cartWidget/CartWidget';
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/");
    }


    return (
        <header className='header' onClick={clickHandler}>
            <img src="../../assets/logo.png" className='logo' ></img>
            <div className='nav-content'>

                <h1 className='titulo'>Athina pastelería</h1>
                <nav>
                    <a href="" className='link'>Inicio</a>
                    <a href="/category/clasicos" className='link'>Clásicos</a>
                    <a href="/category/vanguardia" className='link'>Vanguardia</a>
                    <CartWidget />
                </nav>
            </div>

        </header>
    )
}

export default NavBar;