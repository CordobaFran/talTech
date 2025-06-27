// Misión:

// 1. Crea la estructura de directorios para tu aplicación, asegurándote de crear carpetas para rutas, controladores, modelos y servicios.

// 2. En tu archivo principal, crea dos rutas nuevas:
// - Una ruta que devuelva una respuesta en formato HTML. Podría ser algo simple, como una página de bienvenida.
// - Otra ruta que devuelva una respuesta en formato JSON, por ejemplo, con una lista de usuarios o productos ficticios.
// - Todavía no es necesario colocar las rutas dentro de la carpeta routes, por lo que deberás definirlas en el archivo index.js.

import express from "express"
import path from "path"
import url from "url"

const PORT = 3000
const app = express()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const users = [
    {
        name: "Franco",
        lastName: "Cordoba",
        age: 33,
        email: "francocordobafs@gmail.com"
    }
]

app.get("/", (req, res) => {
    res.status(200)
    res.header('Context-Type', 'html')
    res.sendFile("index.html", { root: __dirname })
})

app.get("/users", (req, res) => {
    res.status(200)
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(users, null, 2))
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})