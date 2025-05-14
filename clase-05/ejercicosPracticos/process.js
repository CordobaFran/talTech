const arg = process.argv.slice(2);

const { CRUD } = require('./crud.js')

const FIND_ARG = (mode, idInput, marcaInput, modeloInput, anioInput, colorInput) => {

    let { marca, modelo, anio, color, id } = CRUD(mode, idInput, marcaInput, modeloInput, anioInput, colorInput)

    switch (mode) {
        case "GET":
            return console.log(`Toma un dato con ID: ${id} Vehiculo: ${marca} ${modelo} del año ${anio} de color ${color}`);
        case "POST":
            return console.log(`recibimos ${marca} ${modelo} del año ${anio} de color ${color} con nuevo ID: ${id} satisfactoriamente`);
        case "PUT":
            return console.log(`modificamos el item con id: ${id} satisfactoriamente`);
        case "DELETE":
            return console.log(`el item con el id: ${id} se eliminó con éxito`);
        default:
            return console.log("No se ingresaron datos vàlidos. Prueba con GET, POST, PUT o DELETE");
    }
}

FIND_ARG(arg[0], arg[1], arg[2], arg[3], arg[4], arg[5])