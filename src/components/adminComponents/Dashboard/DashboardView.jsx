import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"

export const DashboardView = ({ length }) => {
    /* -------------------------------------------------------------------------- */
    /*                                 Estructura                                 */
    /* -------------------------------------------------------------------------- */
    // - Título: Panel de administrador ✅
    // - Botones para cerrar sesión y volver a la tienda (acordarse de agregar los Link)
    // - Botón más grande para cargar un producto, que lleva al formulario de alta ✅
    // - Sección Productos en la tienda, con el listado de productos de la tienda ✅
    // - En esa misma sección, para cada producto, dos botones: uno para editarlo y otro para eliminarlo 
    // Lo que tenemos que poner en práctica es la implementación para reutilizar el formulario de alta, para poder
    // usarlo tanto para el alta como para la edición. 

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
            <h4 className="text-left">Tenés un total de <span className="books-quantity">{length}</span> libros en la tienda.</h4>
        </>
    )
}