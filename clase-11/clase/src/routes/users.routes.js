import { Router } from "express";
import userControllers from "../controllers/users.controller.js"
const router = Router()

router.get('/users', userControllers.getAllUsers)
router.get('/users/:id',userControllers.getUserById)
router.post('/users', userControllers.createUser)



export default router