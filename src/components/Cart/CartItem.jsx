import { useCart } from "../../context/CartContext"
import "./Cart.css"

export const CartItem = ({ product }) => {
    const { removeItem } = useCart()
    return (
        <div className="cart-item">
            <p><img className="product-image" title={product.name} src={product.image}></img></p>
            <h4>{product.quantity}</h4>
            <h4>{product.name}</h4>
            <h5>{product.author}</h5>
            <h5>${product.price}</h5>
            <button onClick={() => removeItem(product)} className="generic-button delete-button">Eliminar</button>
        </div>
    )
}