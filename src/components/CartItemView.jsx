import React from "react";

const CartItemView = ({ producto, remove }) => {
    const subTotal = producto.precio * producto.cantidad
    return (
        <tr>
            <td><img src={producto.imagen} alt={producto.nombre} style={{ width: "100px" }} /></td>
            <td className="align-middle">{producto.nombre}</td>
            <td className="align-middle">${producto.precio}</td>
            <td className="align-middle">{producto.cantidad}</td>
            <td className="align-middle">${subTotal}</td>
            <td className="align-middle"><button className="btn btn-danger" onClick={() => remove(producto.id)}>X</button></td>
        </tr>

    )
}

export default CartItemView;