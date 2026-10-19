import { useEffect, useState } from "react"
import { getCategories } from "../../services/productsService"
import { CategoryList } from "../CategoryList/CategoryList"

export const CategoryListContainer = () => {
    const [ categories, setCategories ] = useState()
    const [ error, setError ] = useState()

    useEffect(() => {
        getCategories()
        .then((data) => setCategories(data))
        .catch((error) => setError(error))
    }, [])
    console.log(categories)
    if (error) return <p>Se produjo un error: {error}</p>
    
    return (
        <CategoryList categories={categories}/>
    )
}