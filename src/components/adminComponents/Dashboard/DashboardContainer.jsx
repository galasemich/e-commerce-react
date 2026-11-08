import { useEffect, useState } from "react"
import { DashboardView } from "./DashboardView/DashboardView.jsx"
import { deleteProduct, getProductsByCategory } from "../../../services/productsService"
import "./Dashboard.css"
import { getOrders } from "../../../services/ordersService"

export const DashboardContainer = () => {
    const [ products, setProducts ] = useState([])
    const [ orders, setOrders ] = useState([])
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

    useEffect(() => {
        setErrors(null)
        setLoading(true)

        getOrders()
        .then((data) => setOrders(data))
        .catch((error) => {
            setErrors(error.message)
        })
        .finally(() => {setLoading(false)})
    }, [])

    if (loading) {return <p>Cargando productos...</p>}
    if (errors) {return <p>Se produjo un error al cargar los productos.</p>}

    return (
        <section className="dashboard-container">
            <DashboardView products={products} orders={orders} onDelete={handleDelete}/>
        </section>
    )
}