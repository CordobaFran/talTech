// model
// import ... from '../config/db-connection.js'
import { db } from "../config/db.js";
import { collection, doc, getDoc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

const productCollection = collection(db, "products")

export const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection)
        const products = []
        productList.forEach(doc => products.push({ id: doc.id, ...doc.data() }))
        return products

    } catch (error) {
        throw new Error("Error:", error.message)
    }
}

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "products"), data);
        return docRef;
    } catch (error) {
        throw new Error("Error:", error.message)
    }
}