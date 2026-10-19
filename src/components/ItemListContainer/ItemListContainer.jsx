import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../services/productsService"

export const ItemListContainer = () => {
    const [ products, setProducts ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setProducts([])
        setError(null)
        setLoading(true)

        getProductsByCategory(category)
        .then((data) => setProducts(data))
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [category])

    if (error) {return <p>Se produjo un error: {error}</p>}
    if (loading) {return <p>Cargando...</p>}

    return (
        <div>
            {category && <h1>Categoría: {category}</h1>}
            <ItemList products={products}/>
        </div>
    )
}