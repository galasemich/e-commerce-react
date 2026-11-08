import { db } from "../firebase/config";
import { collection, getDocs, doc, query, where, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore" 

const ordersRef = collection(db, "orders")

export const getOrders = async () => {
    try {
        const ordersSnapshot = await getDocs(ordersRef)
        const orders = ordersSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
        console.log(orders)
        return orders
    } catch (error) {
        console.log("Se produjo un error al traer las órdenes de compra:", error)
        throw new Error(error.message)
    }
}

export const createOrder = async (cart, getTotalItems, getCartTotal) => {
    const totalUnits = getTotalItems()
    const total = getCartTotal()
    const books = cart.map((book) => {
        return { units: book.quantity, title: book.name }
    })
    const order = { totalUnits, total, books }

    try {
        await addDoc(ordersRef, order)
    } catch (error) {
        console.log("Se produjo un error al crear la orden:", error)
        throw error
    }
}

export const getOrderByID = async (id) => {
    try {
        const orderRef = doc(ordersRef, id)
        const orderSnapshot = await getDoc(orderRef)

        if (orderSnapshot.exists()) {
            const order = { id: orderSnapshot.id, ...orderSnapshot.data()}
            return order
        } else {
            return null
        }
    } catch (error) {
        console.log("Se produjo un error al traer el detalle de la orden:", error)
        throw new Error(error.message)
    }
}