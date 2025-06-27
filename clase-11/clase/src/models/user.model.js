class User {
    constructor(name, lastName, email) {
        this.id = crypto.randomUUID(),
        this.name = name,
        this.lastName = lastName,
        this.email = email
    }
}

export default User