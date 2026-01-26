import React from 'react'

const ItemDetail = ({detalle}) => {
    return(
        <div className='contItemDetail'>  
            <img src={detalle.imagen} alt={detalle.nombre}/>
            <div className='contInfoItem'>
                <h1>{detalle.nombre}</h1>
                <p>{detalle.descripcion}</p>
                <p className='precio'>${detalle.precio}</p>
                <p>Stock Disponible: {detalle.stock} Unidades.</p>
            </div>
        </div>
    )
}

export default ItemDetail