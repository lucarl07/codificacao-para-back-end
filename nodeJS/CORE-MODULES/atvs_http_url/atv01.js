const http = require('node:http')
const PORT = 4001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<meta charset="UTF-8"/>')
        res.write('<h1>Olá usuário!</h1> <p>Temos as seguintes rotas:</p>')
        res.write('<ul> <li>/home</li> <li>/about</li> </ul>')
        res.end();
    } else if (req.url === '/home') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<meta charset="UTF-8"/>')
        res.end('<h1>Bem-vindo à página inicial!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<meta charset="UTF-8"/>')
        res.end('<h1>Sobre nós:</h1> <p>Somos uma empresa dedicada a...</p>');
    }
})

server.listen(PORT, () => {
    console.log(`Servidor iniciado no PORT ${PORT} \nLink: http://localhost:${PORT}/`)
})