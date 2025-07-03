//router
import { Router } from "express";
import userController from '../controllers/user.controller.js'

const router = Router()


router.get('/', userController.getUsers) // sin parentesis, le estamos diciendo cual va a ser la fx que va a ejectuar
// , no estamos ejecutando la funcion
//recien se ejecuta cuando voy al endpoint





export default router
