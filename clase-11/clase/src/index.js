import express from "express"
import cors from "cors"
import userRoutes from "./routes/users.routes.js"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use("/api", userRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})