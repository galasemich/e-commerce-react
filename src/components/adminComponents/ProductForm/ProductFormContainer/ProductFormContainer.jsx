import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI"
import { validateProduct } from "../../../../utils/validateProduct"
import { uploadImage } from "../../../../services/uploadImage"
import { createProduct } from "../../../../services/productsService"
import { useNavigate } from "react-router-dom"

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

        //1. Validar inputs
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setLoading(false)
            return
        }

        //2. Subir imagen a ImgBB
        try {
            const imageUrl = await uploadImage(file)

            //3. Armar estructura del objeto para subir a Firestore
            const completeProduct = { ...product, price: Number(product.price), image: imageUrl }
            
            //4. Subir a Firestore
            const id = await createProduct(completeProduct)

            //5. Vaciar formulario
            setProduct(defaultProduct)
            setFile(null)

            //6. Mostrar mensaje de confirmación (con navigate)
            navigate(`/admin/product/success/${id}`, { replace: true })

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