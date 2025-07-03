// controller
import userService from '../services/user.service.js'
const getUsers = (req, res) => {
    try {
        const users = userService.getAll()
        if (users.length === 0) return res.status(200).json({ message: "no hay usuarios disponibles" })
        res.status(200).json({ message: "listado de usuarios", payload: users })
    
    } catch (error) {
        res.status(500).json({ message: "error interno del servidor" })
    }
};

export default { getUsers };
