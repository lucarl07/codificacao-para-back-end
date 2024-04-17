import http, { request } from 'node:http'

const PORT = 3020

const participants = [];

const server = http.createServer((req, res) => {
  const {url, method} = req
  console.log('URL:', url)

  if (url === '/participants' && method === 'GET') {
    // Get all participants:
    console.log('GET participants \n')
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(participants));

  } else if (url === '/participants/count' && method === 'GET') {
    // Obter o número de participantes:
    console.log('GET participants/count')

  } else if (url === '/participants/count/over18' && method === 'GET') {
    // Obter o número de participantes maiores de idade (≥18 anos):
    console.log('GET participants/count/over18')

  } else if (url === '/participants/city/most' && method === 'GET') {
    // Obter a cidade com o maior número de participantes:
    console.log('GET participants/city/most')

  } else if (url.startsWith('/participants/') && method === 'GET') {
    // Obter um participante em específico:
    const partId = url.split('/')[2]
    console.log(`GET ${partId} participant \n`)

    const findPart = participants.find(part => part.id == partId);
    if (!findPart) {
      res.writeHead(404, {"Content-Type": "application/json"})
      res.end(JSON.stringify({
        stt_code: '404 Not Found',
        message: 'Participante não encontrado.'
      }))
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(findPart));

  } else if (url === '/participants' && method === 'POST') {
    // Create participant:
    console.log('POST participants \n')
    
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    })
    .on('end', () => {
      const part = JSON.parse(body);

      if (part.age < 16) {
        res.writeHead(403, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
          status_code: '403 Forbidden',
          message: 'Apenas usuários maiores que 15 anos'
        }))
        return;
      }

      if (part.password !== part.confirmPassword) {
        res.writeHead(400, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
          status_code: '400 Bad Request',
          message: 'As senhas fornecidas não são iguais. Por favor, tente novamente.'
        }))
        return;
      }

      part.id = participants.length + 1
      participants.push(part);

      res.writeHead(201, {"Content-Type": "application/json"})
      res.end(JSON.stringify({
        message: `Usuário ${part.id} cadastrado com sucesso!`,
        data: part
      }));
    });

  } else if (url.startsWith('/participants/') && method === 'PUT') {
    // Update participant:
    const partId = url.split('/')[2]
    console.log(`PUT participant ${partId} \n`)

    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    })
    .on('end', (chunk) => {
      const updtPart = JSON.parse(body)
      const index = participants.findIndex(part => part.id == partId)

      if (index !== -1) {
        participants[index] = {...participants[index], ...updtPart, id: participants[index].id}
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(participants[index]))
      } else {
        res.writeHead(404, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
          status_code: '404 Not Found',
          message: 'Participante não encontrado.'
        }));
      }
    });

  } else if (url.startsWith('/participants/') && method === 'DELETE') {
    // Remove participant:
    const partId = url.split('/')[2]
    console.log(`DELETE ${partId} participants`);

    const index = participants.findIndex(part => part.id == partId);
    
    if (index === -1) {
      res.writeHead(404, {"Content-Type": "application/json"})
      res.end(JSON.stringify({
        status_code: '404 Not Found',
        message: 'Participante não encontrado. Parece que ele nunca existiu mesmo. ¯\\_(ツ)_/¯'
      }))
    }

    participants.splice(index, 1)
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({
      status_code: '200 OK',
      message: 'Participante excluído com sucesso!',
      updated: 'Acesse GET http://localhost:3020/participants para ver os participantes que ainda existem!'
    }))
  } else {
    // Page Not Found
    res.writeHead(404, {"Content-Type": "application/json"})
    res.end(JSON.stringify({
      status_code: '404 Not Found',
      message: 'Página não encontrada.'
    }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is ON ${PORT}`)
});