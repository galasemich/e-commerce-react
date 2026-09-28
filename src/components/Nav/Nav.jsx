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
                <li>
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
                </li>
            </ul>
        </nav>
    )
}   