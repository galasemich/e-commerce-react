import { useState } from "react"
import { useCart } from "../../context/CartContext"

export const AddToCart = ({ item }) => {
    const [ quantity, setQuantity ] = useState(0)
    const { addItem } = useCart()

    const increaseQuantity = () => {setQuantity(quantity + 1)}
    const decreaseQuantity = () => {setQuantity(quantity - 1)}

    return (
    <div className="product-container">
        <div className="product-container">
            <p>Unidades: {quantity}</p>
            <button onClick={increaseQuantity} className="generic-button">+</button>
            <button onClick={decreaseQuantity} className="generic-button" disabled={quantity === 1}>-</button>
        </div>

        <button onClick={() => addItem(item, quantity)} className="generic-button">Agregar al carrito</button>
    </div>
    )
}