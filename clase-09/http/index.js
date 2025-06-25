// netstat -an | find "LISTEN" <-- al poner esto en el CMD me muestra que puertos estan en escucha

const http = require("http")
const fs = require("fs")
const PORT = 3000

const config = (req, res) => {

    const html = fs.readFileaSync("./index.html", "utf-8")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-html')
    res.end(html)
}
// console.log(http);
const server = http.createServer(config)


//listener
server.listen(PORT,()=>{
    console.log("hola");
})

