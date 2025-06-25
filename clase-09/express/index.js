import express from "express";

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200);
    res.send("hola");
})

app.get("/nosotros", (req, res) => {
    res.status(200);
    res.send("NOSOTROS");
})


app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`)
})

