import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Item = ({ producto }) => {
    const navegar = useNavigate()
    const { itemCant } = useContext(CartContext)

    const stockActual = producto.stock - itemCant(producto.id)

    return (
        <div className='card' onClick={() => navegar('/producto/' + producto.id)}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p className='precio'>${producto.precio}</p>
            <p>Stock: {stockActual}</p>
        </div>
    )
}

export default Item;