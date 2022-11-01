import React from 'react'
import './ItemsListContainer.css'

export const ItemsListContainer = (props) => {
  return (
    <div className='mensaje-saludo-container'>
    
    <h2 className='mensaje-bienvenido'>{props.name}</h2>
    
    </div>
    

)
}
