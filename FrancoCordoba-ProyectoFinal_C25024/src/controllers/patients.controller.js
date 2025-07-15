import patientsServices from "../services/patients.services.js";

/* GET PATIENTS */
const getAllpatients = async (req, res) => {
    try {
        const patients = await patientsServices.getAll()
        res
            .status(200)
            .json({ message: "list of Patients", payload: patients })
    } catch (error) {
        res
            .status(500)
            .json({ message: "internal server error", error: error.message })
    }
}

const getByFilter = async (req, res) => {
    try {
        const filterParams = {
            name: req.query.name || null,
            lastName: req.query.lastName || null,
            idNum: req.query.idNum || null,
            insurance: req.query.insurance || null,
            status: req.query.status || null
        }

        const filteredPatients = await patientsServices.getByFilter(filterParams)
        res
            .status(200)
            .json({ message: "filtered patients", payload: filteredPatients })

    } catch (error) {
        res
            .status(500)
            .json({ message: "internal server error", error: error.message })

    }
}

/* CREATE PATIENTS */
const createPatient = async (req, res) => {
    try {
        const newPatientData = req.body
        const newPatient = await patientsServices.create(newPatientData)
        res
            .status(200)
            .json({ message: "patient written with ID", payload: newPatient })

    } catch (error) {
        res
            .status(500)
            .json({ message: "internal server error", error: error.message })
    }
}

/* DELETE PATIENT */
const deletePatient = async (req, res) => {
    try {
        const id = req.params.id
        const deletedPatient = await patientsServices.deleteData(id)
        res
            .status(200)
            .json({ message: "patient deleted with id", payload: { id: deletedPatient } })

    } catch (error) {
        res
            .status(500)
            .json({ message: "internal server error", error: error.message })
    }
}

/* EDIT PATIENT */
const editPatient = async (req, res) => {
    try {
        const id = req.params.id
        const newData = req.body
        const editPatient = await patientsServices.editById(id, newData)
        res
            .status(200)
            .json({ message: "list of Patients", payload: {id: editPatient} })

    } catch (error) {
        res
            .status(500)
            .json({ message: "internal server error", error: error.message })
    }
}

export default { getAllpatients, getByFilter, createPatient, deletePatient, editPatient }




