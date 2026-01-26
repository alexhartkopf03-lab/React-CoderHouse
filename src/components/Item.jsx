import React from 'react'
import { useNavigate } from 'react-router-dom';

const Item = ({ producto }) => {
    const navegar = useNavigate()
    return (
        <div className='card' onClick={()=>navegar('/producto/'+producto.id)}>
            <img src={producto.imagen} alt={producto.nombre}/>
            <p>{producto.nombre}</p>
            <p className='precio'>${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
        </div>
    )
}

export default Item;