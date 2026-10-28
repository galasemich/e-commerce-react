import { DashboardProduct } from "./DashboardProduct"

export const DashboardProductList = ({ products }) => {
    if (!products.length) {
        return <p>No hay productos para mostrar.</p>
    }

    return (
        products.map((product) => (
            <DashboardProduct {...product} key={product.id}/>
        ))
    )
}