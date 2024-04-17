import http from 'node:http'

const PORT = 3333

const server = http.createServer((request, response) => {});

server.listen(PORT, () => {
    console.log(`Server is ON ${PORT}`)
});