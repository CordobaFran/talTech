import { authentication } from "../middlewares/auth.middleware.js";
import productsController from "../controllers/products.controller.js";
import { Router } from "express";

const productsRouter = Router()

productsRouter.get("/", productsController.getAllProducts)
productsRouter.get("/filter", productsController.getProductByFilter)
productsRouter.get("/:id", productsController.getProductById)
productsRouter.post("/create", authentication, productsController.createProduct)
productsRouter.delete("/:id", authentication, productsController.deleteProduct)
productsRouter.put("/:id", authentication, productsController.editProduct)


export default productsRouter