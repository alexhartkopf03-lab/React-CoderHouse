import { createContext, useState } from "react";

//Creo el contexto
export const CartContext = createContext()

//Creo el proveedor
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //AÑADIR PRODUCTO AL CARRITO
    const addItem = (item, cant) => {
        if (isInCart(item.id)) {
            setCart(cart.map((prod) => {
                if (prod.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cant}
                }else{
                    return prod
                }
            }))
        } else {
            setCart([...cart, { ...item, cantidad: cant }])
        }
    }

    //BORRAR PRODUCTO DEL CARRITO
    const removeItem = (itemId) => {
        setCart(cart.filter((prod) => prod.id !== itemId))
    }

    //BORRAR CARRITO
    const cleanCart = () => {
        setCart([])
    }

    //VERIFICADOR DE EXISTENCIA EN EL CARRITO
    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    //CALCULADOR DEL TOTAL DEL CARRITO
    const total = () => {

    }

    //CONTADOR DE CANTIDAD DE PRODUCTOS DEL CARRITO
    const cantidad = () => {

    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, cleanCart, total, cantidad }}>
            {children}
        </CartContext.Provider>
    )
}

