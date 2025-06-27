import express from "express"
import userRoutes from "./routes/users.routes.js"

//SSR
//SERVER SIDE RENDERING

//SETTINGS
const app = express();
const PORT = 5000

app.use(express.json())
app.use("/api/users", userRoutes)

app.listen(PORT, ()=> console.log("server listening at PORT 5000"))