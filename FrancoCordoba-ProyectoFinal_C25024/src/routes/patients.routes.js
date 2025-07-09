import patientsController from "../controllers/patients.controller.js";
import { Router } from "express";

const patientsRouter = Router()

patientsRouter.use("/", patientsController.getAllpatients)

export default patientsRouter

