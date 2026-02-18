import React, { useContext, useState } from 'react'
import ItemCount from './itemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemDetail = ({ detalle }) => {
    const { addItem, itemCant } = useContext(CartContext)
    const [prodExist, setProdExist] = useState(false)

    const onAdd = (cant) => {
        addItem(detalle, cant)
        setProdExist(true)
        Swal.fire({
            icon: 'success',
            title: 'Producto Agregado al Carrito',
            text: `${cant}u. - ${detalle.nombre}.`,
            showConfirmButton: false,
            timer: 2000
        })
    }

    const StockActual = detalle.stock - itemCant(detalle.id)

    return (
        <div className='contItemDetail'>
            <img src={detalle.imagen} alt={detalle.nombre} />
            <div className='contInfoItem'>
                <h1>{detalle.nombre}</h1>
                <p>{detalle.descripcion}</p>
                <p className='precio'>${detalle.precio}</p>
                <p>Stock Disponible: {StockActual} Unidades.</p>
                {prodExist ? <Link className='btn btn-success' to='/cart'>Ir al Carrito</Link> : <ItemCount stock={StockActual} onAdd={onAdd}></ItemCount>}
            </div>
        </div>
    )
}

export default ItemDetail;