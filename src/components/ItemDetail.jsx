import React, { useContext, useState } from 'react'
import ItemCount from './itemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ detalle }) => {
    const { addItem } = useContext(CartContext)
    const [prodExist, setProdExist] = useState(false)

    const onAdd = (cant) => {
        addItem(detalle, cant)
        setProdExist(true)
    }

    return (
        <div className='contItemDetail'>
            <img src={detalle.imagen} alt={detalle.nombre} />
            <div className='contInfoItem'>
                <h1>{detalle.nombre}</h1>
                <p>{detalle.descripcion}</p>
                <p className='precio'>${detalle.precio}</p>
                <p>Stock Disponible: {detalle.stock} Unidades.</p>
                {prodExist ? <Link className='btn btn-success' to='/cart'>Ir al Carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}></ItemCount>}
            </div>
        </div>
    )
}

export default ItemDetail;