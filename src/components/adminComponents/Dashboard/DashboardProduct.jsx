import { Link } from "react-router-dom"
import "./Dashboard.css"

export const DashboardProduct = ({ name, author, image }) => {
    return (
        <>
        <div className="flex-container">
            <p><img className="product-image" title={name} src={image}></img></p>
            <h5>{name}</h5>
            <h5>{author}</h5>

            <div className="button-container">
                <Link className="generic-button edit-button" to="">Editar</Link>
                <Link className="generic-button delete-button" to="">Eliminar</Link>
            </div>
        </div>
        </>
    )
}