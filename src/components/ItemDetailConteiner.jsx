import React, { useEffect, useState } from 'react'
import { fetchUnProducto } from '../asyncMock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchUnProducto(id)
        .then((prod)=>setDetalle(prod))
        .catch((error)=>console.log(error))
    },[id])

    return(
        <div style={{padding:'20px', display: 'flex', justifyContent: 'center'}}>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer