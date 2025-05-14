let vehiculos = []

class Vehiculo {
    constructor(marca, modelo, anio, color) {
        this.marca = marca,
            this.modelo = modelo,
            this.anio = anio,
            this.color = color;
        this.id = this.getId()
    }
    mayorAnio(anio) {
        if (this.anio > anio) {
            return console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.anio} Color: ${this.color}`);
        }
    }

    getId(database = vehiculos) {
        if (database.length == 0) {
            return 1
        } else {
            let lastId = database[database.length - 1].id
            return lastId + 1
        }
    }
}

vehiculos.push(new Vehiculo("peugeot", "206", 2006, "gris"))
vehiculos.push(new Vehiculo("fiat", "uno", 2001, "rojo"))
vehiculos.push(new Vehiculo("renault", "cactus", 2022, "gris"))
vehiculos.push(new Vehiculo("peugeot", "205", 2003, "negro"))
vehiculos.push(new Vehiculo("ford", "fiesta", 2019, "azul"))
vehiculos.push(new Vehiculo("ford", "focus", 2024, "blanco"))
vehiculos.push(new Vehiculo("fiat", "128", 1998, "blanco"))
vehiculos.push(new Vehiculo("fiat", "147", 1995, "blanco"))
vehiculos.push(new Vehiculo("toyota", "corolla", 2024, "beige"))
vehiculos.push(new Vehiculo("toyota", "hillux", 2025, "negro"))

function findColor(data, colorSearch) {
    let counter = 0;
    data.forEach((el) => {
        const { marca, modelo, anio, color } = el;
        if (color == colorSearch) {
            counter++;
        }
    })
    console.log(`Hay ${counter} vehiculos de color ${colorSearch}`);
}

function findYear(data, year) {
    return data.forEach((el) => {
        el.mayorAnio(year);
    })
}

module.exports = { vehiculos, Vehiculo }