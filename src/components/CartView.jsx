import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItemView from "./CartItemView"
import { Link } from "react-router-dom";


const CartView = () => {
    const { cart, cleanCart, removeItem, total } = useContext(CartContext)

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
                        <CartItemView key={prod.id} producto={prod} remove={removeItem}/>
                    ))}
                </tbody>
            </table>
            <p className="total">TOTAL: ${total()}</p>
            <div className="contBtns">
                <Link className="btn btn-success" to={'/checkout'}>Terminar mi Compra</Link>
                <Link className="btn btn-primary" to={'/'}>Ver más Productos</Link>
                <button className="btn btn-danger" onClick={cleanCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default CartView;