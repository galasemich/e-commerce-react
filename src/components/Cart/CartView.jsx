import { useCart } from "../../context/CartContext"
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"
import { Link } from "react-router-dom"
import "./Cart.css"

export const CartView = () => {
    const { cart } = useCart()
    
    return (
        <section>
            <div>
                {cart.length ? (
                <>
                <h1>Tu carrito de compras</h1>
                <CartList />
                <CartSummary />
                </>
                ) : (
                <>
                <h4>Tu carrito está vacío.</h4>
                <h4>Navegá por la tienda para agregar libros.</h4>
                </>)} 
            </div>
        </section>
    )
}