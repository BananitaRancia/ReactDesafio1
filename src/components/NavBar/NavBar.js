import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
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