const http = require('node:http')
const port = 8080

const server = http.createServer((request, response) => {
    response.write('Olá mundo! Meu primeiro servidor HTTP.')
    response.end();
})

server.listen(port, () => {
    console.log(`Server on PORT ${port} \nLink: http://localhost:${port}/ \nBy lucarl07 😎`)
});