const arg = process.argv.slice(2);

const FIND_ARG = (argument) => {
    argument.map((el) => {
        switch (el) {
            case "GET":
                return console.log("toma un dato");
            case "POST":
                return console.log("recibimos {data} satisfactoriamente");
            case "PUT":
                return console.log("modificamos el item con id: {id} satisfactoriamente");
            case "DELETE":
                return console.log("el item con el id: {id} se eliminó con éxito");
            default:
                return console.log("No se ingresaron datos vàlidos. Prueba con GET, POST, PUT o DELETE");
        }
    })
}

FIND_ARG(arg)