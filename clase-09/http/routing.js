const http = require("http")
// const fs = require("fs")
const PORT = 3000

const config = (req, res) => {
    // console.log(req.url)
    // const html = fs.readFile("./index.html", "utf-8")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain')
    res.end("hola")
}
// console.log(http);
const server = http.createServer(config)


//listener
server.listen(PORT,()=>{
    console.log("chau");
})

