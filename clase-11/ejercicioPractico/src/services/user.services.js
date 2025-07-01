import User from "../models/user.model.js";

const dbUsers = []

const getAllUsers = (query) => {
    if (!query) {
        return dbUsers
    } else {
        const usersFiltered = dbUsers.filter(user => user.name == query)
        return usersFiltered
    }
}

const getUserById = (id) => {
    let userIndex = null
    const userFound = dbUsers.filter((user, index) => {
        if (user.id === id) {
            userIndex = index
        }
        return user.id === id
    })

    return { userFound, userIndex }
}

const createUser = (newUserData) => {
    const { name, lastName, email } = newUserData
    const newUser = new User(name, lastName, email)
    dbUsers.push(newUser)
    return newUserData
}

const deleteUser = (id) => {
    const userId = getUserById(id).userIndex
    console.log(userId);
    if (userId === null) {
        return null
    } else {
        return dbUsers.splice(userId, 1)
    }

}

export default { getAllUsers, getUserById, createUser, deleteUser }