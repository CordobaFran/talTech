import express from 'express'
import cors from "cors"

import authRouter from "./routes/auth.routes.js"
import productsRouter from './routes/products.routes.js'

const app = express()

app.set("PORT", 3000)


app.use(cors())
app.use(express.json())

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/products", productsRouter)
app.use((req, res, next) => {
  res
  .status(404)
  .json({message: "ruta no encontrada", error: 404});
});

app.listen(app.get("PORT"), ()=>{
    console.log(`listening on PORT ${app.get("PORT")}`);
})