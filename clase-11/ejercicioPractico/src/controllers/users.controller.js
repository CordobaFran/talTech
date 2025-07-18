import userServices from "../services/user.services.js"

const getAllUsers = (req, res) => {
    try {
        const name = req.query.name
        const users = userServices.getAllUsers(name)
        res.status(200).json({ payload: users })
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message })
    }
}

const getUserById = (req, res) => {
    try {
        const id = req.params.id
        const userFound = userServices.getUserById(id).userFound
        res.status(200).json({ message: "user found", payload: userFound })
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message })
    }
}

const createUser = (req, res) => {
    try {
        const newUserData = req.body
        const newUser = userServices.createUser(newUserData)
        res.status(200).json({ message: "user created", payload: newUser })
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message })
    }
}

const deleteUser = (req, res) => {
    try {
        const id = req.params.id
        const userDelete = userServices.deleteUser(id)
        console.log(userDelete);
        if (!userDelete){
            res.status(201).json({message: "user not found"})
        } else {
            res.status(200).json({ message: "user deleted", payload: userDelete })
        }
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message })
    }
}

export default { getAllUsers, getUserById, createUser, deleteUser }