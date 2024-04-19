const http = require('node:http')
const PORT = 2050

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<meta charset="utf8">')
        res.write('<h1>Home Page</h1>')
        res.write('<p>Bem vindo a página inicial!</p>')
        res.end()
    } else if (req.url === "/sobre") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<meta charset="utf8">')
        res.write('<h1>Sobre Nós</h1>')
        res.write('<p>Bem vindo a página sobre nós!</p>')
        res.end()
    } else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.write('<meta charset="utf8">')
        res.write('<h1>404 Not Found</h1>')
        res.write('<p>A página que você procurou não foi encontrada.</p>')
        res.end()
    }
});

server.listen(PORT, () => {
    console.log(`Server on ${PORT}`)
});