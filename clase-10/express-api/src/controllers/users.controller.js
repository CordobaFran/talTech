import usersServices from "../services/users.services.js";

const getAllUsers = (req, res) => {
    const users = usersServices.getAllUsers();
    res.status(200).json(users)
};

const createUser = (req, res) => {
    const { name, lastName } = req.body;
    const newUser = usersServices.createUser({ name, lastName })
    res.status(201).json(newUser)
};

export default { getAllUsers, createUser }