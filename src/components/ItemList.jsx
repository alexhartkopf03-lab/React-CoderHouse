import React from 'react'
import Item from "./Item";
import "../css/ItemList.css"

const ItemList = ({ productos }) => {
    return (
        <div className='contItems'>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    )
}

export default ItemList;