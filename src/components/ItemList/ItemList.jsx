import { Item } from "../Item/Item"
import { Link } from "react-router-dom"

export const ItemList = ({ products }) => {
    if (!products.length) {
        return <p>No hay libros para mostrar.</p>
    }

    const books = <div className="products-container">
        {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
                <Item {...product}/>
            </Link>
        ))}
    </div>

    return <>{books}</>
}