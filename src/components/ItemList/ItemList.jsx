import { Item } from "../Item/Item"
import { Link } from "react-router-dom"
import "./ItemList.css"

export const ItemList = ({ products }) => {
    if (!products.length) {
        return <p>No hay libros para mostrar.</p>
    }

    return (
        <div className="product-list-container">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <Item {...product}/>
                </Link>
            ))}
        </div>
    )
}