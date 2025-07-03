import productsServices from "../services/products.services.js"

const getAllProducts = async (req, res) => {
 try {
    const products = await productsServices.getAll()
    res
    .status(200)
    .json({message: "all products list", payload: products})
 } catch (error) {
    res
    .status(500)
    .json({message: "internal server error", error: error.message})
 }
}

const createProduct = async (req,res) => {
 try {
    const newProductData = req.body
    const newProduct = await productsServices.create(newProductData)
    res
    .status(200)
    .json({message: `product created with id ${newProduct.id}`, payload: newProduct})
 } catch (error) {
    res
    .status(500)
    .json({message: "internal server error", error: error.message})
 }
}

export default { getAllProducts, createProduct }