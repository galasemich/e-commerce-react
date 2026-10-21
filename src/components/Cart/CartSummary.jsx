import { useCart } from "../../context/CartContext"
import "./Cart.css"

export const CartSummary = () => {
    const { getCartTotal, getTotalItems, checkout } = useCart()
    const total = getCartTotal()
    const totalItems = getTotalItems()

    return (
        <div className="summary-container">
            <p>Unidades: {totalItems}</p>
            <p>Total a pagar: ${total}</p>
            <button onClick={checkout} className="generic-button payment-button">Finalizar compra</button>
        </div>
    )
}