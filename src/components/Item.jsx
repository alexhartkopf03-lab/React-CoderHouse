import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div style={{padding: "10px", width: "200px", textAlign: "center", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "150px", height: "150px" }} />
            <p>{producto.nombre}</p>
            <p style={{padding:"10px", backgroundColor:"red", color:"white", borderRadius:"5px", fontWeight: 'bold'}}>${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <Link to={'/producto/'+producto.id}>Más informacion</Link>
        </div>
    )
}

export default Item;