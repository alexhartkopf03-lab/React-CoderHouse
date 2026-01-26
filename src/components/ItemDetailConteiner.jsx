import React, { useEffect, useState } from 'react'
import { fetchUnProducto } from '../asyncMock/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})

    useEffect(() => {
        fetchUnProducto(6)
        .then((prod)=>setDetalle(prod))
        .catch((error)=>console.log(error))
    },[])

    return(
        <div style={{padding:'20px', display: 'flex', justifyContent: 'center'}}>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer