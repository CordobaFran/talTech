const users = []

const getAllUsers = () => {
    return users
}

const createUser = (user) => {
    const newUser = {
        id: crypto.randomUUID(),
        name: user.name,
        lastName: user.lastName
    }

    users.push(newUser)
    return newUser
}

export default { getAllUsers, createUser }