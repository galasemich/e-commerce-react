import { Link } from "react-router-dom"
import "./Dashboard.css"
import "./Order.css"

export const Order = ({ id, totalUnits, total }) => {
    return (
        <div className="order">
            <h4 className="order-id">#{id}</h4>
            <h4>{totalUnits} libros</h4>
            <h4>${total}</h4>
            <Link className="generic-button edit-button" to={`/admin/orders/${id}`}>Ver detalle</Link>
        </div>
    )

}