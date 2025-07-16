import productsServices from "../services/products.services.js"

const getAllProducts = async (req, res) => {
    try {
        const getAllProducts = await productsServices.getAll()
        res
            .status(200)
            .json({ message: "list of products", payload: getAllProducts })

    } catch (error) {
        res
            .status(500)
            .json({ message: "server internal error", error: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const productById = await productsServices.getById(id)
        res
            .status(200)
            .json({ message: "product with id", payload: productById })

    } catch (error) {
        res
            .status(500)
            .json({ message: "server internal error", error: error.message })
    }
}

const getProductByFilter = async (req, res) => {
    try {
        const filterParams = {
            name: req.query.name || null,
            category: req.query.category || null,
            status: req.query.status || null
        }

        const filteredProducts = await productsServices.getByFilter(filterParams)
        res
            .status(200)
            .json({ message: "list of products filtered", payload: filteredProducts })

    } catch (error) {
        res
            .status(500)
            .json({ message: "server internal error", error: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const newProductData = req.body
        const newProduct = await productsServices.create(newProductData)
        res
            .status(200)
            .json({ message: "product created", payload: newProduct })
    } catch (error) {
        res
            .status(500)
            .json({ message: "server internal error", error: error.message })
    }
}

const editProduct = async (req, res) => {
    try {
        const id = req.params.id
        const newData = req.body
        const editProduct = await productsServices.edit(id, newData)
        res
            .status(200)
            .json({ message: "product edited", payload: {id: editProduct}})
    } catch (error) {
        res
            .status(500)
            .json({ message: "server internal error", error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const deletedProduct = await productsServices.deleteData(id)
        res
            .status(200)
            .json({ message: "product deleted with id", payload: {id: deletedProduct} })
    } catch (error) {
        res
            .status(500)
            .json({ message: "server internal error", error: error.message })
    }
}

export default { getAllProducts, getProductByFilter, createProduct, editProduct, deleteProduct, getProductById }