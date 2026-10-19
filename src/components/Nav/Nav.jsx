import { Link } from "react-router-dom"
import "./Nav.css"
import { useCart } from "../../context/CartContext"
import { CategoryListContainer } from "../CategoryListContainer/CategoryListContainer"

export const Nav = () => {
    const { getTotalItems } = useCart()
    const totalItems = getTotalItems()

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li className="dropdown">
                    <a>Libros</a>
                    <div className="dropdown-content">
                        <CategoryListContainer/>
                    </div>
                </li>
                {/* <li>
                    <Link to={"/category/scifi"}>Ciencia ficción</Link>
                </li>
                <li>
                    <Link to={"/category/poesía"}>Poesía</Link>
                </li>
                <li>
                    <Link to={"/category/terror"}>Terror</Link>
                </li>
                <li>
                    <Link to={"/category/fantasía"}>Fantasía</Link>
                </li> */}
                <li>
                    <Link to={"/cart"}>Tu carrito {totalItems > 0 && <span className="total-cart">{totalItems}</span>}</Link>
                </li>
            </ul>
        </nav>
    )
}   