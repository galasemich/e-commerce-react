import "./Dashboard.css"
import "./DashboardView.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../../../context/AuthContext"
import { useState } from "react"
import { DashboardProductList } from "../DashboardProductList"
import { OrdersList } from "../OrdersList"

export const DashboardView = ({ products, orders, onDelete }) => {
    const { logout } = useAuth()
    const [ selection, setSelection ] = useState("products")
    const productsLength = products.length
    const ordersLength = orders.length

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
            
            <div className="section-flex-container">
                <p className="section" onClick={() => setSelection("products")}>Productos</p>
                <p className="section" onClick={() => setSelection("orders")}>Órdenes de compra</p>
            </div>

            {
            selection === "products"
            ? (<>
                <h4 className="length">Tenés {productsLength} libros en la tienda.</h4>
                <DashboardProductList products={products} onDelete={onDelete} />
                </>)
            : (<>
                <h4 className="length">Tenés {ordersLength} pedidos.</h4>
                <OrdersList orders={orders} />
                </>
            )
            }
        </>
    )
}