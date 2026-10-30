import { Link, useParams } from "react-router-dom"
import "../adminComponents/Dashboard/Dashboard.css"

export const ProductSuccess = () => {
    const { id, action } = useParams()

    return (
        <div className="dashboard-container">
            <p>{action === "edit" 
            ? "Editaste el libro correctamente ✅" 
            : `Agregaste un libro correctamente bajo el ID ${id} ✅` }</p>
            <div className="success-button-container">
                <Link className="generic-button" to="/">Volver a la tienda</Link>
                <Link className="generic-button" to="/admin/dashboard">Volver al dashboard</Link>
            </div>
        </div>
        
    )
}