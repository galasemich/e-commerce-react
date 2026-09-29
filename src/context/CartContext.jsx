import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("El componente no está habilitado para usar el contexto.")
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    const navigate = useNavigate()

    const itemInCart = (product) => {
        const result = cart.some((item) => item.id === product.id)
        return result
    }

    const addItem = (product, quantity) => {
        const result = itemInCart(product)
        if (result) {
            const updatedCart = cart.map((item) => 
                item.id === product.id
                ? {...item, quantity: item.quantity + quantity}
                : item
            )
            setCart(updatedCart)
        } else {
            setCart([...cart, {...product, quantity}])
        }
        alert(`Agregaste ${product.name} a tu carrito.`)
    }

    const removeItem = (product) => {   
        const updatedCart = cart.filter((item) => item.id != product.id)
        setCart(updatedCart)
        alert(`Eliminaste ${product.name} de tu carrito.`)
    }

    const clearCart = () => {
        setCart([])
        alert("Vaciaste tu carrito.")
    }

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0)
        return totalItems
    }

    const getCartTotal = () => {
        const cartTotal = cart.reduce((acc, product) => acc + product.quantity * product.price, 0) 
        return cartTotal
    }

    const checkout = () => {
        alert("Realizaste tu compra con éxito.")
        clearCart()
        navigate("/")
    }

    const values = { addItem, removeItem, clearCart, getTotalItems, getCartTotal, checkout } 

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}