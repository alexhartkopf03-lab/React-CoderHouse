import React from 'react'

const ItemDetail = ({detalle}) => {
    return(
        <div style={{display: 'flex', gap:'10px', justifyContent: 'center', padding:'20px', boxShadow: "2px 2px 10px rgba(0,0,0,0.3)", borderRadius:'20px'}}>  
            <img src={detalle.imagen} alt={detalle.nombre}/>
            <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <h1>{detalle.nombre}</h1>
                <p>{detalle.descripcion}</p>
                <p style={{padding:'10px', backgroundColor: 'red', borderRadius:'10px', color:'white', fontWeight: 'bold', fontSize: '2rem'}}>${detalle.precio}</p>
                <p>Stock Disponible: {detalle.stock} Unidades.</p>
            </div>
        </div>
    )
}

export default ItemDetail