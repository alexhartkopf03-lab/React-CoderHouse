import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import CartView from "./CartView";
import EmptyCart from "./EmptyCart";
import '../css/Cart.css'

const CartContainer = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)

    return(
        <>
            {cart.length ? <CartView/> : <EmptyCart/>}
        </>
    )
}

export default CartContainer;