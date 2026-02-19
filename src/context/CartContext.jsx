import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const cartLS = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(cartLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    const addItem = (item, cant) => {
        if (isInCart(item.id)) {
            setCart(cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cant }
                } else {
                    return prod
                }
            }))
        } else {
            setCart([...cart, { ...item, cantidad: cant }])
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((prod) => prod.id !== itemId))
    }

    const cleanCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((acm, prod) => acm += (prod.cantidad * prod.precio), 0)
    }

    const cantidad = () => {
        return cart.reduce((acm, prod) => acm += prod.cantidad, 0)
    }

    const itemCant = (id) => {
        const itemInCart = cart.find((item) => item.id === id)
        if (itemInCart) {
            return itemInCart.cantidad;
        } else {
            return 0;
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, cleanCart, total, cantidad, itemCant }}>
            {children}
        </CartContext.Provider>
    )
}

