import userServices from "../services/user.services.js"

const getAllUsers = (req, res) => {
    try {
        const users = userServices.getAllUsers()
        res.status(200).json({payload: users})
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const getUserById = (req, res) => {
    try {
        const id = req.params.id
        const userFound = userServices.getUserById(id)
        console.log(userFound)
        res.status(200).json({payload: userFound})
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const createUser = (req, res) => {
    try {
        const newUserData = req.body
        const newUser = userServices.createUser(newUserData)
        res.status(200).json({message: "user created", payload: newUser})
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const deleteUser = (req, res) => {

}

export default { getAllUsers, getUserById, createUser, deleteUser }