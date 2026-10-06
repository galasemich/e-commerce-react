import { useCart } from "../../context/CartContext"
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"
import { Link } from "react-router-dom"
import "./Cart.css"

export const CartView = () => {
    const { cart } = useCart()
    
    return (
        <section>
            <h1>Tu carrito de compras</h1>
            <div className="cart-table">
                {cart.length ? (
                <>
                <CartList />
                <CartSummary />
                </>
                ) : (
                <>
                <h4>Tu carrito está vacío.</h4>
                <Link className="generic-button" to={"/"}>Volver al inicio</Link>
                </>)} 
            </div>
        </section>
    )
}