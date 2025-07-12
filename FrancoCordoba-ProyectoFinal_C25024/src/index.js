import express from 'express'
import cors from "cors"

import patientsRouter from './routes/patients.routes.js'

const app = express()

app.set("PORT", 3000)


app.use(cors())
app.use(express.json())

app.use("/api/v1/patients", patientsRouter)

app.listen(app.get("PORT"), ()=>{
    console.log(`listening on PORT ${app.get("PORT")}`);
})