import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ itemDetail, setItemDetail ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        fetch("/data/products.json")
        .then(response => response.json())
        .then((data) => {
            const item = data.find((item) => item.id === parseInt(id))
            if (item) {
                setItemDetail(item)
                return
            } else {
                throw new Error("No se encontró ningún resultado con el ID proporcionado.")
            }
        })
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