import { getAllPatients, createPatient, getPatientsByFilter } from "../models/patients.model.js"

const getAll = async () => {
    return await getAllPatients()
}

const getByFilter = async (filterParams) => {
    return await getPatientsByFilter(filterParams)
}

const create = async (newPatientData) => {
    return await createPatient(newPatientData)
}

const deleteData = async (params) => {

}

const editById = async (params) => {

}

export default { getAll, getByFilter, create, deleteData, editById }


