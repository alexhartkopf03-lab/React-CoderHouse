import React, { useEffect, useState } from 'react'
import { fetchUnProducto } from '../asyncMock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import '../css/ItemDetailConteiner.css'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchUnProducto(id)
        .then((prod)=>setDetalle(prod))
        .catch((error)=>console.log(error))
    },[id])

    return(
        <div className='centerContDetail'>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer