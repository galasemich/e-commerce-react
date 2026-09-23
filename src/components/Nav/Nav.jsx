import { Link } from "react-router-dom"
import "./Nav.css"

export const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/products"}>Libros</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Tu carrito</Link>
                </li>
            </ul>
        </nav>
    )
}   