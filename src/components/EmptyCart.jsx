import { Link } from "react-router-dom";

const EmptyCart = () => {
    return(
        <div className="contCart">
            <h2>Tu carrito esta vacio</h2>
            <Link className="btn btn-danger" to='/'>Ver Productos</Link>
        </div>
    )
}

export default EmptyCart;