import React from 'react'
import CartWidget from '../cartWidget/CartWidget';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const NavBar = () => {

    const { getTotalAmountAndQuantity} = useCart();
    const {cantidad, total} = getTotalAmountAndQuantity();
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
                    <Link to={""} className='link'>Inicio</Link>
                    <Link to={"/category/clasicos"} className='link'>Clásicos</Link>
                    <Link to={"/category/vanguardia"} className='link'>Vanguardia</Link>
                    {cantidad ? <Link to={"/cart"}><CartWidget /> {cantidad} </Link> : <></> }
                </nav>
            </div>

        </header>
    )
}

export default NavBar;