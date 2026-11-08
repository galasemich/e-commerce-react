import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrderByID } from "../../../services/ordersService"
import { OrderDetail } from "./OrderDetail"

export const OrderDetailContainer = () => {
    const { id } = useParams()
    const [ order, setOrder ] = useState(null)
    const [ errors, setErrors ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getOrderByID(id)
        .then((data) => setOrder(data))
        .catch ((error) => setErrors(error))
        .finally(() => {setLoading(false)})
    }, [id])

    if (loading) {return <p>Cargando detalle de la orden...</p>}
    if (errors) {return <p>Se produjo un error al cargar el detalle de la orden.</p>}

    return (
        <>
           <OrderDetail {...order} /> 
        </>
    )
}