import User from "../models/user.model.js";

const dbUsers = []

const getAllUsers = () => {
    return dbUsers
}

const getUserById = (id)=>{
    const userFound = dbUsers.filter((user, index) => {
        console.log(index)
        return user.id === id
    })
    return userFound
}

const createUser = (newUserData) => {
    const { name, lastName, email } = newUserData
    const newUser = new User(name, lastName, email)
    dbUsers.push(newUser)
    console.log(dbUsers)
    return newUserData
}

const deleteUser = (id) => {
    
}

export default { getAllUsers, getUserById, createUser, deleteUser }