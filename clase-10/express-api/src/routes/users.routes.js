import { Router } from "express"
import userController from "../controllers/users.controller.js"

const router = Router()

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)



export default router
