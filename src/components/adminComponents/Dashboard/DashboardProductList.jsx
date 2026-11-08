import { DashboardProduct } from "./DashboardProduct"
import "./Dashboard.css"

export const DashboardProductList = ({ products, onDelete }) => {
    if (!products.length) {
        return <p>No hay productos para mostrar.</p>
    }

    return (
        products.map((product) => (
            <DashboardProduct {...product} key={product.id} onDelete={onDelete}/>      
        ))
    )
}