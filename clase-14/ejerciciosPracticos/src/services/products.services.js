import {
    getAllproducts,
    createProduct
} from "../models/products.model.js"

const getAll = async () => {
    return await getAllproducts()
}

const create = async (data) => {
    return await createProduct(data)
}

export default { getAll, create }