const http = require('node:http')
const PORT = 1050

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'})
    res.write(`Olá, mundo!`)
    res.end();
})

server.listen(PORT, () => {
    console.log(`Server on PORT: ${1050}`)
})