import { getAllPatients, createPatient } from "../models/patients.model.js"

const getAll = async () => {
    return await getAllPatients()
}

const getByFilter = async (params) => {
    
}

const create = async (newPatientData) => {
    return await createPatient(newPatientData)
}

const deleteData = async (params) => {
    
}

const editById = async (params) => {
    
}

export default {getAll, getByFilter, create, deleteData, editById}


