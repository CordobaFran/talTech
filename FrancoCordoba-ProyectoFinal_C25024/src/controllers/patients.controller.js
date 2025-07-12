import patientsServices from "../services/patients.services.js";

const getAllpatients = async (req, res) => {
    try {
        const patients = await patientsServices.getAll()
        res
        .status(200)
        .json({message: "list of Patients", payload: patients})
    } catch (error) {
        res
        .status(500)
        .json({message: "internal server error", error: error.message})
    }
}

const getByFilter = async () => {
    try {
        res
        .status(200)
        .json({message: "list of Patients", payload: Patients})
    } catch (error) {
        res
        .status(500)
        .json({message: "internal server error", error: error.message})
    }
}

const createPatient = async (req,res) => {
    try {
        const newPatientData = req.body
        const newPatient = await patientsServices.create(newPatientData)
        res
        .status(200)
        .json({message: "patient written with ID", payload: newPatient})
    } catch (error) {
        res
        .status(500)
        .json({message: "internal server error", error: error.message})
    }
}

const deletePatient = async () => {
    try {
        res
        .status(200)
        .json({message: "list of Patients", payload: Patients})
    } catch (error) {
        res
        .status(500)
        .json({message: "internal server error", error: error.message})
    }
}

const editPatient = async () => {
    try {
        res
        .status(200)
        .json({message: "list of Patients", payload: Patients})
    } catch (error) {
        res
        .status(500)
        .json({message: "internal server error", error: error.message})
    }
}

export default { getAllpatients, getByFilter, createPatient, deletePatient, editPatient }




