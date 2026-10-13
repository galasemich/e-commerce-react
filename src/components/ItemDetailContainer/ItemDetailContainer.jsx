import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductsByID } from "../../services/productsService"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ itemDetail, setItemDetail ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getProductsByID(id)
        .then((data) => setItemDetail(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [id])

    if (error) {return <h1>Se produjo un error: {error}</h1>}
    if (loading) {return <h1>Cargando datos...</h1>}

    return (
        <section>
            <div>
                <h1>Detalle del producto</h1>
                <ItemDetail item={itemDetail}/>
            </div>
        </section>
    )
}