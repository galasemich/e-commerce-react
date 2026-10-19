import { db } from "../firebase/config";
import { collection, getDocs, doc, query, where, getDoc } from "firebase/firestore" 

const productsRef = collection(db, "products")
const categoriesRef = collection(db, "categories")

export const getProductsByID = async (id) => {
    try {
        const productRef = doc(productsRef, id)
        const snapshot = await getDoc(productRef)

        if (snapshot.exists()) {
            const product = snapshot.data()
            return product
        } else {
            return null
        }
    } catch (error) {
        console.log("Se produjo un error al traer el producto por ID:", error.message)
        throw new Error(error.message)
    }
}

export const getProductsByCategory = async (category) => {
    try {
        let queryRef

        if (category) {
            queryRef = query(productsRef, where("category", "==", category))
        } else {
            queryRef = productsRef
        }

        const snapshot = await getDocs(queryRef)
        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })

        return productsFormat
    } catch (error) {
        console.log("Se produjo un error al traer los productos:", error.message)
        throw new Error(error.message)
    }
}

export const getCategories = async () => {
    try {
        const snapshot = await getDocs(categoriesRef)
        const categories = snapshot.docs.map((doc) => {
            return doc.data()
        })
        console.log(categories)
        return categories
    } catch (error) {
        console.log("Error al traer las categorías:", error)
    }
}