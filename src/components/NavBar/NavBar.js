//import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import steam_verde from '../../assets/steam_verde.png'

const NavBar = () => {
    return (
        <div className='navbar-container'>
         
        <div>
            <img className='logo_header' src = {steam_verde}/>
        </div>
        
        <h1 className='titulo-nav'>Steam Verde</h1> 
        
        <ul className='menu-items'>
            <li className='nav-items'>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li className='nav-items'>
                <NavLink to="/category/tienda">Tienda</NavLink>
            </li>
            <li className='nav-items'>
                <NavLink to="/category/soporte">Soporte</NavLink>
            </li>
        </ul>

        
        <div>
            <Link to="/cart"><CartWidget></CartWidget></Link>
            </div>
        </div>
    )
}

export default NavBar