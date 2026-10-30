import { useEffect, useState } from "react"
import { DashboardView } from "./DashboardView"
import { deleteProduct, getProductsByCategory } from "../../../services/productsService"
import "./Dashboard.css"
import { DashboardProduct } from "./DashboardProduct"

export const DashboardContainer = () => {
    const [ products, setProducts ] = useState([])
    const [ errors, setErrors ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const handleDelete = async (id) => {
        await deleteProduct(id)
        getProductsByCategory()
        .then((data) => setProducts(data))
        .catch((error) => {
            setErrors(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getProductsByCategory()
        .then((data) => setProducts(data))
        .catch((error) => {
            setErrors(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {return <p>Cargando productos...</p>}
    if (errors) {return <p>Se produjo un error al cargar los productos.</p>}

    const length = products.length

    return (
        <section className="dashboard-container">
            <DashboardView length={length}/>
            {products.map((product) => (
                <DashboardProduct {...product} key={product.id} onDelete={handleDelete}/>
            ))}
        </section>
    )
}