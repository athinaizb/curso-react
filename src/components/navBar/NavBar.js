import React from 'react'
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { BrowserRouter} from 'react-router-dom';

const NavBar = () => {

    const { getTotalAmountAndQuantity} = useCart();
    const {cantidad, total} = getTotalAmountAndQuantity();

    return (
        <header className='header'>
            <img src="https://iili.io/b26aHB.png" className='logo' ></img>
            <div className='nav-content'>

                <h1 className='titulo'>Athina pastelería</h1>
                    <Link to={""} className='link'>Inicio</Link>
                    <Link to={'/category/clasicos'} className='link'>Clásicos</Link>
                    <Link to={"/category/vanguardia"} className='link'>Vanguardia</Link>
                    {cantidad ? <Link to={"/cart"}><CartWidget /> {cantidad} </Link> : <></> }
            </div>

        </header>
    )
}

export default NavBar;