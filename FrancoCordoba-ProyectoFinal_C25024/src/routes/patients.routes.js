import patientsController from "../controllers/patients.controller.js";
import { Router } from "express";

const patientsRouter = Router()

patientsRouter.get("/", patientsController.getAllpatients)
patientsRouter.get("/filter", patientsController.getByFilter)
patientsRouter.post("/", patientsController.createPatient)


export default patientsRouter

