import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
        
        <h1 className='titulo-nav'>Tienda Steam</h1> 
        
        <div class="logo_header">
        </div>
        
        <ul className='menu-items'>
            <li>
                <a href='' className='menu-list'>Juegos</a>
            </li>
            <li>
                <a href='' className='menu-list'>Buscar</a>
            </li>
            <li>
                <a href='' className='menu-list'>Mis Favoritos</a>
            </li>
        </ul>

        <CartWidget></CartWidget>
        
        </div>
    )
}

export default NavBar