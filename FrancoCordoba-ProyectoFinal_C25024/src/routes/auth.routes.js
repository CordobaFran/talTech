import authController from "../controllers/auth.controller.js";
import { Router } from "express";
import { authentication } from "../middlewares/auth.middleware.js";

const authRouter = Router()

authRouter.post("/login", authController.login)

export default authRouter