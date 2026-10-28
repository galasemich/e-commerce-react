import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI"
import { validateProduct } from "../../../../utils/validateProduct"
import { uploadImage } from "../../../../services/uploadImage"
import { createProduct } from "../../../../services/productsService"
import { useNavigate } from "react-router-dom"

export const ProductFormContainer = () => {
    /* -------------------------------------------------------------------------- */
    /*         Sobre reutilización de formulario para edición de producto         */
    /* -------------------------------------------------------------------------- */
    // Para reutilizar el formulario de alta de productos en la función de
    // editar productos, se me ocurren varias cosas: 
    // 1. Modificar la ruta original para que sea algo como
    //    "/admin/new-product", y tener otra que sea algo como
    //    "/admin/edit-product/:id". Ambas tendrían como el valor de element al
    //    componente ProductFormContainer (ahí es donde estaríamos
    //    reutilizando).
    // 2. En ProductFormContainer, traeríamos el id con useParams(), y luego
    //    armaríamos un condicional del tipo if (id) {} para evaluar si ese id
    //    vino o no. Si vino, supongo que tendríamos que:
    //      - abrir un useEffect() para traer la información de ese producto por
    //        id, con la función de servicio getProductByID().
    //      - setear el estado product con esa información. De esa manera el
    //        formulario se cargaría con la información que ya está del
    //        producto. El usuario modifica los campos que necesita y eso se
    //        maneja con las funciones de handle. 
    // 3. Crear el servicio para editar el producto. 
    // 4. En el dashboard del administrador, habría que listar cada producto con
    //    dos botones: uno para eliminar por id y otro para editar. 
    // 5. Para los botones, creo que puedo hacer algo así:
    //      - <Link to={`/admin/edit-product/${id}`}>
    //          <button>Editar</button>
    //        </Link>
    //      - el botón para eliminar podría tener un onClick que invoque la
    //        función para eliminar, importada desde los servicios. 
    // 6. Ahora que vuelvo a pensarlo: las rutas que provisoriamente definí
    //    antes en realidad no creo que tengan como element a
    //    ProductFormContainer. Probablemente tengan un componente como
    //    Dashboard como element; este último sería el encargado de renderizar
    //    ProductFormContainer, pasánsole quizás como prop el producto (si la
    //    ruta tenía id, las claves del objeto tienen valores; si no, el
    //    formulario se renderiza vacío.)
    //
    /* -------------------------------------------------------------------------- */
    /*                           Para seguir pensando...                          */
    /* -------------------------------------------------------------------------- */
    // 7. Ahora bien, considerando que sigo la idea del condicional para rellenar con
    //    los datos actuales del producto: ¿cómo le llega la imagen al formulario para editar el 
    //    producto? Porque la imagen se guarda como un link, pero después cuando se
    //    "llena" con los datos del fetch, el input para cargar la imagen
    //    quedaría vacío... ¿O sea que habría que volver a cargar la imagen...?
    //    No parece ser la mejor opción posible. 
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
            navigate(`/admin/products/success/${id}`, { replace: true })
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