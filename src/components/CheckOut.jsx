import React, { useState } from "react"
import "../css/Checkout.css"

const CheckOut = () => {

    const [correoVerif, setCorreoVerif] = useState(false)

    return(
        <div className="contCheckOut">
            <h1>Para terminar su compra complete los siguientes datos</h1>
            <form>
                <label className="form-label">Nombre:</label>
                <input className="form-control" name="nombre" type="text" required/>
                <label className="form-label">Apellido:</label>
                <input className="form-control" name="apellido" type="text" required/>
                <label className="form-label">Telefono</label>
                <input className="form-control" name="telefono" type="number" required/>
                <label className="form-label">Correo Electronico</label>
                <input className="form-control" name="correo" type="email" required/>
                <label className="form-label">Repita Correo Electronico</label>
                <input className="form-control" name="correo2" type="email" required/>
                <button className="btn btn-success" type="submit">Realizar Compra</button>
            </form>
        </div>
    )
}

export default CheckOut