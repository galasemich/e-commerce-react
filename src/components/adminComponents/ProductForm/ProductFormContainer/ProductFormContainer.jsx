import { useState, useEffect } from "react"
import { ProductFormUI } from "../ProductFormUI"
import { validateProduct } from "../../../../utils/validateProduct"
import { uploadImage } from "../../../../services/uploadImage"
import { createProduct, getProductsByID, updateProduct } from "../../../../services/productsService"
import { useNavigate, useParams } from "react-router-dom"

export const ProductFormContainer = () => {
    const defaultProduct = {
        name: "",
        author: "",
        price: "",
        description: "",
        category: ""
    }
    const navigate = useNavigate()
    const [ product, setProduct ] = useState(defaultProduct)
    const [ file, setFile ] = useState(null)
    const [ errors, setErrors ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const { id } = useParams()

    if (id) {
        useEffect(() => {
            getProductsByID(id)
            .then((data) => setProduct(data))
            .catch((error) => setErrors(error))
        }, [])
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({...product, [name]: value})
    }

    const handleImageFile = (e) => {
        const image = e.target.files[0] || null
        setFile(image)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setErrors({})

        const validationErrors = validateProduct({...product, file})

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setLoading(false)
            return
        }

        try {
            let action
            let idNewProduct
            let completeProduct

            if (file) {
                const imageUrl = await uploadImage(file)
                completeProduct = { ...product, price: Number(product.price), image: imageUrl }
            } else {
                completeProduct = product
            }

            if (id) {
                updateProduct(completeProduct, id)
                action = "edit"
            } else {
                idNewProduct = await createProduct(completeProduct)
                action = "create"
            }

            setProduct(defaultProduct)
            setFile(null)
            navigate(`/admin/products/success/${action}/${action === "edit" ? id : idNewProduct}`, { replace: true })
        } catch (error) {
            console.log(error)
            setErrors({ general: error.message })
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onFileChange={handleImageFile}
        />
    )
}