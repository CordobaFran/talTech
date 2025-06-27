import User from "../models/user.model.js"

const usersDB = []

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const userFound = usersDB.find(user => user.id === id)
    return userFound
}

const createUser = (userBody) => {

    //create user with model
    const { name, lastName, email } = userBody
    const newUser = new User(name, lastName, email)

    usersDB.push(newUser)

    return userBody
}


export default { getAllUsers, getUserById, createUser }