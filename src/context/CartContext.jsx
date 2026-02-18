import { createContext, useEffect, useState } from "react";

//Creo el contexto
export const CartContext = createContext()

//TREAMOS DATOS DEL CARRITO EN EL LOCALSTORAGE SI ES QUE EXISTE
const cartLS = JSON.parse(localStorage.getItem('carrito')) || []

//Creo el proveedor
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(cartLS)

    //GUARDAR CARRITO EN LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

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
        return cart.reduce((acm, prod)=> acm += (prod.cantidad*prod.precio), 0)
    }

    //CONTADOR DE CANTIDAD DE PRODUCTOS DEL CARRITO
    const cantidad = () => {
        return cart.reduce((acm, prod)=> acm += prod.cantidad, 0)
    }

    //FUNCION PARA CONTAR ITEMS DEL CARRITO
    const itemCant = (id) => {
        const itemInCart = cart.find((item) => item.id === id)
        if (itemInCart){
            return itemInCart.cantidad;
        }else{
            return 0;
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, cleanCart, total, cantidad, itemCant }}>
            {children}
        </CartContext.Provider>
    )
}

