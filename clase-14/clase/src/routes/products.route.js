//router
import { Router } from "express";
import productController from '../controllers/products.controller.js'

const router = Router()


router.get('/', productController.getProducts)
router.post('/', productController.addProduct)





export default router
