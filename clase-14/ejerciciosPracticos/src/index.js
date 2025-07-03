// Misión:

// 1.   Configurar Firestore en tu Proyecto
// - Crea un nuevo proyecto en Firebase y configura Firestore.
// - Diseña la estructura de la base de datos siguiendo el esquema de los JSON que usaste previamente.

// 2.   Configurar el servicio de Firebase/Firestore en tu proyecto:
// - Instala las dependencias necesarias.
// - Crea un archivo de configuración con las credenciales aportadas por Firebase.
// - Coloca tus credenciales en un archivo .env y utilizalas en tu archivo de configuración.

// 3.   Verifica la compatibilidad con otras capas:
// - Valida que el código de los servicios y controladores siga funcionando correctamente.
// - Utiliza POSTMAN para consultar tu API Rest y recibir los datos provenientes desde Firestore.

import express from "express"
import cors from "cors"
import productRoutes from "./routes/products.routes.js"

const app = express()

app.set("PORT", 3000)
app.use(cors())
app.use(express.json())

app.use("/api/v1/products", productRoutes)

app.listen(app.get("PORT"), ()=>{
 console.log(`Server listening on port: ${app.get("PORT")}`)
})