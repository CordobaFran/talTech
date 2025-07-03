import { Router } from "express";
import productsController from "../controllers/products.controller.js";

const productRoutes = Router()

productRoutes.get("/", productsController.getAllProducts)
productRoutes.post("/", productsController.createProduct)

export default productRoutes