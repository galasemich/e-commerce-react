import { Link, useParams } from "react-router-dom"
import "../adminComponents/Dashboard/Dashboard.css"

export const ProductSuccess = () => {
    const { id } = useParams()
    return (
        <div className="dashboard-container">
            <p>Agregaste el libro exitosamente bajo el ID {id} ✅.</p>
            <div className="success-button-container">
                <Link className="generic-button" to="/">Volver a la tienda</Link>
                <Link className="generic-button" to="/admin/dashboard">Volver al dashboard</Link>
            </div>
        </div>
        
    )
}