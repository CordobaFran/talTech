import productsController from "../controllers/products.controller.js";
import { Router } from "express";

const productsRouter = Router()

productsRouter.get("/", productsController.getAllProducts)
productsRouter.get("/:id", productsController.getProductById)
productsRouter.get("/filter", productsController.getProductByFilter)
productsRouter.post("/create", productsController.createProduct)
productsRouter.delete("/:id", productsController.deleteProduct)
productsRouter.put("/:id", productsController.editProduct)


export default productsRouter