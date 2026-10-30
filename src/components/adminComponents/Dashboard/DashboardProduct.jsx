import "./Dashboard.css"
import { Link } from "react-router-dom"

export const DashboardProduct = ({ name, author, image, id, onDelete }) => {
    return (
        <div className="flex-container">
            <p><img className="product-image" title={name} src={image}></img></p>
            <h5>{name}</h5>
            <h5>{author}</h5>
            <div className="button-container">
                <Link className="generic-button edit-button" to={`/admin/products/edit-product/${id}`}>Editar</Link>
                <Link className="generic-button delete-button" to="" onClick={() => {onDelete(id)}}>Eliminar</Link>
            </div>
        </div>
    )
}