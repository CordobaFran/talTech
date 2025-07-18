import express from "express"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200)
    res.send("Inicio")
})

app.get("/ping", (req, res) => {

    res.status(200);
    res.header("Context-Type", "text/plain")
    res.send("/pong")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
