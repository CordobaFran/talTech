// Misión:
// 1. Establece 4 rutas en el archivo de entrada de la aplicación. Asegúrate de:
// - Permitir solicitudes entre dominios configurando CORS.
// - Agregar un middleware que capture las rutas no encontradas y devuelva una respuesta 404.

// 2. Define rutas que utilicen:
// - Path params: Por ejemplo, una ruta que devuelva información basada en el ID de un producto o usuario.
// - Query params: Una ruta que filtre datos con base en parámetros como categoría o precio.
// Usa POSTMAN para probar las rutas que configuraste. Asegúrate de capturar correctamente 
// los parámetros enviados y mostrar la información de manera clara en las respuestas.

import express from "express"
import cors from "cors"

import userRoutes from "./routes/user.routes.js"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use("/api", userRoutes)
app.use((req, res, next)=>{
    res.status(404).json({message: "page not found"})
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})