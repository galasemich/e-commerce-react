import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"

export const DashboardView = ({ length }) => {
    const { logout } = useAuth()

    return (
        <>
            <div className="flex-container">
                <h1 className="dashboard-header-title">Panel de administrador</h1>
                <div className="button-container">
                    <Link className="generic-button" to="/">Volver a la tienda</Link>
                    <Link className="generic-button" onClick={logout}>Cerrar sesión</Link>
                </div>
            </div>
            <h4 className="text-left">Desde este panel vas a poder ver agregar, eliminar y editar los productos de la tienda.</h4>
            <Link className="add-button" to="/admin/products/new">Agregar un producto ➕</Link>
            {length > 0 
            ? <h4 className="text-left">Tenés un total de <span className="books-quantity">{length}</span> libros en la tienda.</h4>
            : <h4>No tenés libros cargados en la tienda.</h4>}
        </>
    )
}