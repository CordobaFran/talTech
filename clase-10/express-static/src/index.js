import express from "express"
import path from "path"
import url from "url"

//SSR
//SERVER SIDE RENDERING

//SETTINGS
const app = express();
const PORT = 3000

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "public")))

//console.log(path.join(__dirname, "public"));

app.listen(PORT, ()=> console.log("server listening at PORT 3000"))