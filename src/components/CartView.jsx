import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItemView from "./CartItemView"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CartView = () => {
    const { cart, cleanCart, removeItem, total } = useContext(CartContext)
    const confirmClean = () => {
        Swal.fire({
            title: '¿Seguro que quiere vaciar el carrito?',
            icon: 'question',
            confirmButtonText: 'Si, vaciar carrito',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Se vacio tu carrito!',
                    icon: 'warning'
                })
                cleanCart()
            }
        })
    }

    return (
        <div className="contCart">
            <h1>Mi carrito</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod) => (
                        <CartItemView key={prod.id} producto={prod} remove={removeItem} />
                    ))}
                </tbody>
            </table>
            <p className="total">TOTAL: ${total()}</p>
            <div className="contBtns">
                <Link className="btn btn-success" to={'/checkout'}>Terminar mi Compra</Link>
                <Link className="btn btn-primary" to={'/'}>Ver más Productos</Link>
                <button className="btn btn-danger" onClick={confirmClean}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default CartView;