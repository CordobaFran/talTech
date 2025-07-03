import Product from "../models/products.model.js"

const productsDb = []

const getAll = () => {
    return productsDb
}

const getById = (id) => {
    let indexFound = null
    const productFound = productsDb.filter((product, index) => {
        indexFound = index
        return product.id === id
    })
    return { productFound, indexFound }
}

const create = (productData) => {
    const { name, category, price, qty } = productData
    const newProduct = new Product(name, category, price, qty)
    productsDb.push(newProduct)
    return newProduct
}

const deleteById = (id) => {
    const idFound = getById(id).indexFound
    if (idFound === null){
        return null
    } else {
        return productsDb.splice(idFound,1)
    }
}

export default { getAll, getById, create, deleteById }

