import { Router } from "express";
import productsController from "../controller/products.controller.js";

const productRoutes = Router()

productRoutes.get("/", productsController.getAll)
productRoutes.post("/",productsController.create)
productRoutes.get("/:id", productsController.getById)
productRoutes.delete("/:id", productsController.deleteById)

export default productRoutes