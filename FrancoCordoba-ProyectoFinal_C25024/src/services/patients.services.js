import { getAllPatients, createPatient, getPatientsByFilter, deletePatientById, editPatientById } from "../models/patients.model.js"

const getAll = async () => {
    return await getAllPatients()
}

const getByFilter = async (filterParams) => {
    return await getPatientsByFilter(filterParams)
}

const create = async (newPatientData) => {
    return await createPatient(newPatientData)
}

const deleteData = async (id) => {
    return await deletePatientById(id)
}

const editById = async (id, newData) => {
    return await editPatientById(id, newData)
}

export default { getAll, getByFilter, create, deleteData, editById }


