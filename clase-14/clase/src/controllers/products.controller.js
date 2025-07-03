// controller
// import productService from '../services/user.service.js'
import productService from "../services/products.service.js";

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAll()
        res
            .status(200)
            .json({ message: "lista de productos", payload: products })
    } catch (error) {
        res
            .status(500)
            .json({ message: "error interno del servidor", error: error.message })
    }
};

const addProduct = async (req, res) => {
    try {
        const data = req.body
        const newProduct = await productService.addProduct(data)
        res
        .status(200)
        .json({message: `product add with id ${newProduct.id}`, payload: newProduct})
    } catch (error) {
        res
        .status(500)
        .json({message: "error interno del servidor", error: error.message})
    }
}

export default { getProducts, addProduct };
