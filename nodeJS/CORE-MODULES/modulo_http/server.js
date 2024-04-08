const http = require('node:http')
const PORT = 1050 || 2050

// request -> url
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plan'})
        res.end('Página Inicial');
    } else if (req.url === '/sobre') {
        res.writeHead(200, {'Content-Type': 'text/plan'})
        res.end('Página Sobre');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plan'})
        res.end('Caminho não encontrado');
    }
})

server.listen(PORT, () => {
    console.log(`Server on PORT ${PORT} \nLink: http://localhost:${PORT}/`)
})