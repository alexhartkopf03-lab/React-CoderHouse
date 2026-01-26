import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return(
        <div  style={{color:'red', textAlign:'center'}}>
            <h1>Opss... No se encontro tu ruta!</h1>
            <Link className='btn btn-primary' to='/'>Volver al Inicio</Link>
        </div>
    )
}

export default Error