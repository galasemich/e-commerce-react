import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [ products, setProducts ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setProducts([])
        setError(null)
        setLoading(true)

        fetch("/data/products.json")
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Se produjo un error al traer los datos.")
            }
            return respuesta.json()
        .then((datos) => {
            if (category) {
                const filteredData = datos.filter((prod) => prod.category === category)
                setProducts(filteredData)
            } else {
                setProducts(datos)
            }
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
        })
    }, [category])

    if (error) {return <p>Se produjo un error: {error}</p>}
    if (loading) {return <p>Cargando...</p>}

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}