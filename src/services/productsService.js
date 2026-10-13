import { db } from "../firebase/config";
import { collection, getDocs, doc, query, where, getDoc } from "firebase/firestore" 

const productsRef = collection(db, "products")

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef)
        if (snapshot) {
            const productsFormat = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
                })

            return productsFormat
        }
        
    } catch (error) {
        console.log("Se produjo un error al traer los productos:", error.message)
        throw new Error(error.message)
    }
}

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