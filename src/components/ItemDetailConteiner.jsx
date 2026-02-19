import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import '../css/ItemDetailConteiner.css'
import SpinnerLoad from './SpinnerLoad'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const [spinner, setSpinner] = useState(true)
    const [invalid, setInvalid] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({
                        id: res.id,
                        ...res.data()
                    })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setSpinner(false))
    }, [id])

    if (spinner) {
        return (
            <>
                <SpinnerLoad />
            </>
        )
    } else if (invalid) {
        return (
            <>
                <h2 style={{ textAlign: "center" }}>Este producto no existe..</h2>
            </>
        )
    } else {
        return (
            <div className='centerContDetail'>
                <ItemDetail detalle={detalle} />
            </div>
        )
    }

}

export default ItemDetailContainer