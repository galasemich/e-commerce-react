import { useEffect, useState } from "react"
import { DashboardProductList } from "./DashboardProductList"
import { DashboardView } from "./DashboardView"
import { getProductsByCategory } from "../../../services/productsService"
import "./Dashboard.css"

export const DashboardContainer = () => {
    const [ products, setProducts ] = useState([])
    const [ errors, setErrors ] = useState(null)
    const [ loading, setLoading ] = useState(true)

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
            <DashboardProductList products={products}/>
        </section>
    )
}