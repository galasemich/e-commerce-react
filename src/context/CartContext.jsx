import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/ordersService";
import { toast } from "react-toastify"

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
        toast.success("Agregaste el libro a tu carrito.", {
            theme: "dark"
        })
    }

    const removeItem = (product) => {   
        const updatedCart = cart.filter((item) => item.id != product.id)
        setCart(updatedCart)
        toast.success("Eliminaste el libro de tu carrito.", {
            theme: "dark"
        })
    }

    const clearCart = () => {
        setCart([])
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
        createOrder(cart, getTotalItems, getCartTotal)
        toast.success("Realizaste tu compra con éxito", {
            theme: "dark"
        })
        clearCart()
        navigate("/")
    }

    const values = { cart, addItem, removeItem, clearCart, getTotalItems, getCartTotal, checkout } 

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}