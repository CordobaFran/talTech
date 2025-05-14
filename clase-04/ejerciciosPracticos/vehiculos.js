class Vehiculo {
    constructor(marca, modelo, anio, color) {
        this.marca = marca,
            this.modelo = modelo,
            this.anio = anio,
            this.color = color;
    }
    mayorAnio(anio) {
        if (this.anio > anio) {
            return console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.anio} Color: ${this.color}`);
        }
    }
}

const vehiculos = [
    new Vehiculo("peugeot", "206", 2006, "gris"),
    new Vehiculo("fiat", "uno", 2001, "rojo"),
    new Vehiculo("renault", "cactus", 2022, "gris"),
    new Vehiculo("peugeot", "205", 2003, "negro"),
    new Vehiculo("ford", "focus", 2024, "blanco"),
    new Vehiculo("fiat", "128", 1998, "blanco"),
    new Vehiculo("fiat", "147", 1995, "blanco"),
    new Vehiculo("ford", "fiesta", 2019, "azul"),
    new Vehiculo("toyota", "corolla", 2024, "beige"),
    new Vehiculo("toyota", "hillux", 2025, "negro")
]

function findColor(data, colorSearch) {

    let counter = 0

    data.forEach((el) => {
        const { marca, modelo, anio, color } = el
        if (color == colorSearch) {
            counter++
        }
    })

    console.log(`Hay ${counter} vehiculos de color ${colorSearch}`);
}

function findYear(data, year){
    return    data.forEach((el) => {
        el.mayorAnio(year)
    })
}


findYear(vehiculos, 2018)
findColor(vehiculos, "negro")
