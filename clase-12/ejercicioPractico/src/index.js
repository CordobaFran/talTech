// Misión:
// - Crear rutas organizadas con Express Router
// - Migra las rutas de tu archivo principal a archivos separados en una carpeta 
// llamada routes por ejemplo: products.routes.js
// - Usa Express Router para configurar el o los archivos de rutas y asegúrate de exportarlos
// correctamente para que pueda ser utilizado en el archivo principal.

// 2. Implementar controladores para manejar la lógica
// - Crea un archivo llamado product.controller.js dentro de la carpeta controllers.
// - Crea los controladores necesarios para responder a las rutas definidas en el ejercicio anterior.
// - Mueve la lógica de las rutas al controlador correspondiente y asegúrate de que las funciones sean claras y reutilizables.

// 3.  Añadir una capa de servicios con datos simulados
// - Crea un archivo llamado product.service.js dentro de la carpeta services.
// - Simula datos en formato JSON, como una lista de productos o usuarios,
// y utiliza estas funciones en los controladores para devolver respuestas dinámicas.
// - Ejemplo práctico:Supongamos que tienes una ruta que devuelve una lista de productos.
// Este es el flujo que debes implementar:
// Archivo productRoutes.js (en la carpeta routes)Define las rutas principales y vincúlalas a las funciones del controlador.
// Archivo productController.js (en la carpeta controllers)Implementa la lógica de cada ruta, como obtener productos o filtrar por categoría.
// Archivo productService.js (en la carpeta services)Crea funciones que devuelvan datos simulados para que puedan ser utilizados en el controlador.

import express from 'express'
import cors from 'cors'
import productRoutes from './routes/products.route.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use("/api/v1/products", productRoutes)

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})