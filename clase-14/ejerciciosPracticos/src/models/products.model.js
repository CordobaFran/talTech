import { db } from "../config/db.js";

import { collection, getDocs, addDoc } from "firebase/firestore";



export const getAllproducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const products = []
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        })
        return products

    } catch (error) {
        throw new Error('error: ', error.message)
    }
}

export const createProduct = async (newProductData) => {
    try {
        const docRef = await addDoc(collection(db, "users"),
            newProductData
        );
        return docRef
        
    } catch (error) {
        throw new Error('error: ', error.message)
    }
}
