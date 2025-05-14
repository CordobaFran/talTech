const { vehiculos, Vehiculo } = require('./database.js')

function CRUD(action, id, marca, modelo, anio, color, database = vehiculos) {

    const ID_FOUND = () => {
        idFound = database.map((el) => el.id).indexOf(parseInt(id))
        if (idFound > 0) {
            return idFound
        } else {
            return "ID no encontrado";
        }
    }

    const CREATE = () => {
        database.push(new Vehiculo(marca, modelo, anio, color))
        return database[database.length-1]
    }

    const READ = () => {
        const findVehiculos = () => {
            return database.find((el) => el.id == id)
        }
        return findVehiculos()

    }

    const UPDATE = () => {
        if (ID_FOUND() > 0) {
            idFound = ID_FOUND()
            database[idFound].marca = marca ? marca : database[idFound].marca
            database[idFound].modelo = modelo ? modelo : database[idFound].modelo
            database[idFound].anio = anio ? anio : database[idFound].anio
            database[idFound].color = color ? color : database[idFound].color
            return database[idFound]
        } else {
            return ID_FOUND()
        }
    }

    const DELETE = (database = vehiculos) => {
        if (ID_FOUND() > 0) {
            idFound = ID_FOUND()
            database.splice(idFound, 1)
            return database[idFound]
        } else {
            console.log(ID_FOUND());
        }
    }

    switch (action) {
        case "POST":
            return CREATE()
        case "GET":
            return READ()
        case "PUT":
            return UPDATE()
        case "DELETE":
            return DELETE()
        default:
            break;
    }

}



// console.log(vehiculos);

// CRUD("GET", 2)
// CRUD("POST", "", "peugeot", "206", 2010, "rojo")
// CRUD("DELETE", 11)
// CRUD("UPDATE", 2, "chevrolet", "cruze", 2022)

module.exports = { CRUD }