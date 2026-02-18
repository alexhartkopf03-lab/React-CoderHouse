import React, { useContext, useState } from "react"
import "../css/Checkout.css"
import { useForm } from "react-hook-form"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


const CheckOut = () => {

    const [process, setProcess] = useState(false)
    const { register, handleSubmit, formState: { errors }, getValues, watch } = useForm()
    const {cart, total, cleanCart} = useContext(CartContext)
    const navegar = useNavigate()

    const onSubmit = handleSubmit((data) => {
        setProcess(true)
        let orden = {
            comprador: {
                nombre: data.nombre,
                apellido: data.apellido,
                correo: data.correo
            },
            compra: cart,
            total: total(),
            fecha: serverTimestamp()
        }
        const venta = collection(db, "pedidos")
        addDoc(venta, orden)
        .then((res)=>{
            cleanCart()
            Swal.fire({
                title:'¡Tu compra fue enviada con exito!',
                text: `Orden ID: ${res.id}`,
                icon: 'success',
                confirmButtonText: 'Volver al Inicio'
            }).then((res)=>{
                if(res.isConfirmed) {
                    navegar('/')
                }
            })
        })
        .catch((error)=> {
            console.log(error)
            Swal.fire({
                title:'Upsss...',
                text: 'Hubo un error al enviar tu compra, por favor intente más tarde.',
                icon: 'error'
            })
        })
        .finally(()=>setProcess(false))
    })

    console.log(errors)

    return (
        <div className="contCheckOut">
            <h1>Para terminar su compra complete los siguientes datos</h1>
            <form onSubmit={onSubmit}>
                <label className="form-label">Nombre:</label>
                <input className="form-control" name="nombre" type="text" {...register("nombre", {
                    required: { value: true, message: "Nombre es requerido" },
                    minLength: { value: 3, message: "Nombre debe tener al menos 3 caracteres" },
                    maxLength: { value: 20, message: "Nombre debe tener maximo 20 caracteres" }
                })} />
                {errors.nombre && <span>{errors.nombre.message}</span>}

                <label className="form-label">Apellido:</label>
                <input className="form-control" name="apellido" type="text" {...register("apellido", {
                    required: { value: true, message: "Apellido es requerido" },
                    minLength: { value: 3, message: "Apellido debe tener al menos 3 caracteres" },
                    maxLength: { value: 20, message: "Apellido debe tener maximo 20 caracteres" }
                })} />
                {errors.apellido && <span>{errors.apellido.message}</span>}

                <label className="form-label">Correo Electronico</label>
                <input className="form-control" name="correo" type="email" {...register("correo", {
                    required: { value: true, message: "Correo es requerido" }
                })} />
                {errors.correo && <span>{errors.correo.message}</span>}

                <label className="form-label">Repita Correo Electronico</label>
                <input className="form-control" name="correo2" type="email" {...register("correo2", {
                    validate: value => value === watch('correo') || 'Los correos no coinciden'
                })} />
                {errors.correo2 && <span>{errors.correo2.message}</span>}

                <button className="btn btn-success" type="submit" disabled={process}>{process ? 'Enviando Pedido...' : 'Realizar Compra'}</button>
            </form>

        </div>
    )
}

export default CheckOut