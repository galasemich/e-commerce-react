import { useCart } from "../../context/CartContext"
import { CartItem } from "./CartItem"

export const CartList = () => {
    const { cart } = useCart()

    return (
        <div className="cart-container">
            {cart.map((product) => (
                <CartItem product={product} key={product.id}/>
            ))} 
        </div>
    )
}