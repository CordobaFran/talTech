import { Router } from "express"
import usersController from "../controllers/users.controller.js"


const routes = Router()

routes.get("/users", usersController.getAllUsers)
routes.get("/users/:id", usersController.getUserById)
routes.post("/users", usersController.createUser)
routes.delete("/users/:id", usersController.deleteUser)


export default routes