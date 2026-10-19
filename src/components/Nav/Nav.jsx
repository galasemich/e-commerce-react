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
                    <Link className="nav-principal" to={"/"}>Inicio</Link>
                </li>
                <li className="dropdown">
                    <span className="nav-principal">Libros ▼</span>
                    <div className="dropdown-content">
                        <CategoryListContainer/>
                    </div>
                </li>
                <li>
                    <Link className="nav-principal" to={"/cart"}>Tu carrito {totalItems > 0 && <span className="total-cart">{totalItems}</span>}</Link>
                </li>
            </ul>
        </nav>
    )
}   