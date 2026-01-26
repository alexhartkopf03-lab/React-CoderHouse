import React, { useEffect, useState } from 'react'
import { fetchUnProducto } from '../asyncMock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import '../css/ItemDetailConteiner.css'
import SpinnerLoad from './SpinnerLoad'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const [spinner, setSpinner] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetchUnProducto(id)
        .then((prod)=>setDetalle(prod))
        .catch((error)=>console.log(error))
        .finally(()=>setSpinner(false))
    },[id])

    if (spinner){
        return(
            <>
               <SpinnerLoad/>
            </>
        )
    }else{
        return(
            <div className='centerContDetail'>
                <ItemDetail detalle={detalle}/>
            </div>
        )
    }
    
}

export default ItemDetailContainer