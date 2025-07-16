import { db } from "../config/db.firebase.js";
import { collection, addDoc, getDocs, getDoc, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";

class Product {
    constructor(name, price, qty, description, category, status = "active") {
        this.name = name,
            this.price = price,
            this.qty = qty,
            this.description = description,
            this.category = category,
            this.status = status
    }

    toFirebase() {
        return {
            name: this.name,
            price: this.price,
            qty: this.qty,
            description: this.description,
            category: this.category,
            status: this.status
        }
    }

}

/* GET PRODUCTS */
export const getAllProducts = async () => {
    const products = []

    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    });

    return products
}

/* GET PRODUCT ID */
export const getProductById = async (id) => {

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {id:docSnap.id, ...docSnap.data()}
    } else {
        return { error: "doc not found" }
    }
}

/* GET PRODUCTS FILTERED */
export const getProductsByFilter = async (filterParams) => {

    const { name, category, status } = filterParams

    const conditions = []

    if (name) { conditions.push(where("name", "==", name.toLowerCase())) }
    if (category) { conditions.push(where("category", "==", category.toLowerCase())) }
    if (status) { conditions.push(where("status", "==", status)) }

    const products = []
    const queryDb = query(collection(db, 'products'), ...conditions)
    const snapshot = await getDocs(queryDb)

    if (snapshot.empty) {
        console.log("No se encontraron coincidencias.");
        return [];
    }

    snapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products
}

/* CREATE PRODUCTS */
export const createProduct = async (newProductData) => {
    try {
        const { name, price, qty, description, category, status } = newProductData
        const newProduct = new Product(name, price, qty, description, category, status)

        const docRef = await addDoc(collection(db, "products"), newProduct.toFirebase()); //no instanciar la clase, se necesta objeto
        return "Document written with ID: ", docRef.id

    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

/* DELETE PRODUCTS */
//agregar exepcion al no encontrar id
export const deleteProductById = async (id) => {
    try {
        const deletedDoc = await deleteDoc(doc(db, "products", id))
        deletedDoc
        return id

    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

/* EDIT PRODUCTS */
//agregar exepciones cuando viene en newData algun valor vacio
//agregar exepcion al no encontrar id
export const editProductById = async (id, newData) => {
    try {
        const productRef = doc(db, "products", id)
        await updateDoc(productRef, newData)
        return id
    } catch (error) {
        console.error("Error editing document: ", error);

    }
}