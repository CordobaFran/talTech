import userServices from "../services/user.services.js";

const getAllUsers = (req, res) => {
    try {

        const data = userServices.getAllUsers()
        res.status(200).json(data)
    } catch (error) {

        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
};
const createUser = (req, res) => {
    try {

        const newUserData = req.body
        if(!newUserData.name || !newUserData.lastName || !newUserData.email){
            return res.status(400).json({message: "Datos de usuarios incompletos"})
        }
        const newUser = userServices.createUser(newUserData)
        res.status(200).json({ message: "usuario creado correctamente", payload: newUser })
    } catch (error) {

        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
};
const getUserById = (req, res) => {
    try {
        const id = req.params.id;
        const userFound = userServices.getUserById(id)
        if(!userFound) return res.status(201).json({message: "user not found"})

        res.status(200).json({message: "user found", payload: userFound})
        
    } catch (error) {
        res.status(500).json({ message: "error interno del servidor", error: error.message })
    }
};

export default { getAllUsers, createUser, getUserById }