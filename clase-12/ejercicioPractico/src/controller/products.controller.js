import productsServices from "../services/products.services.js"

const getAll = (req, res) => {
    try {
        const products = productsServices.getAll()
        res.status(200).json({ message: "products list", payload: products })
    } catch (error) {
        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
}

const getById = (req, res) => {
    try {
        const id = req.params.id
        const productFound = productsServices.getById(id).productFound
        res.status(200).json({ message: "product found", payload: productFound })
    } catch (error) {
        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
}

const create = (req, res) => {
    try {
        const productData = req.body
        const newProduct = productsServices.create(productData)
        res.status(200).json({ message: "product added", payload: newProduct })
    } catch (error) {
        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
}

const deleteById = (req, res) => {
    try {
        const id = req.params.id
        const productDeleted = productsServices.deleteById(id)
        res.status(200).json({ message: "product deleted", payload: productDeleted })
    } catch (error) {
        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
}

export default { getAll, getById, create, deleteById }