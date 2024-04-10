import http from 'node:http';

// Métodos: GET, POST, PUT, PATH, DELETE
/** REQUISIÇÃO
 * 1. Corpo da Aplicação
 *  ↪ Método POST
 *  ↪ request.body
 * 2. Parâmetros de busca (search) e query
 *  ↪ Método GET
 *  ↪ http://localhost:3333/users/2
 * 3. Parâmetros de rota (route)
 *  ↪ Métodos PUT, PATH e DELETE
 *  ↪ http://localhost:3333/users/1
 */

// Códigos:
const PORT = 4010

const users = [
  {
    name: 'Fulano de Tal',
    age: 21,
    city: 'Maceió',
    state: 'Alagoas',
    id: '3478975'
  },
  {
    name: 'Ciclano de Tal',
    age: 17,
    city: 'Arapiraca',
    state: 'Alagoas',
    id: '7276109'
  },
  {
    name: 'Maria das Graças',
    age: 33,
    city: 'Aracajú',
    state: 'Sergipe',
    id: '6804847'
  },
];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") { // Buscar todos os usuários
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  } else if (false) { // Buscar um único usuário
    //
  } else if (method === "POST" && url === "/users") { // Cadastrar um usuário
    
    let body = '';

    request.on('data', (chunk) => {
      body += chunk.toString()
    })
    
    request.on('end', () => {
      const newUser = JSON.parse(body)
      newUser.id = ((Math.random() * 8999999) + 1000000).toFixed(0);
      
      users.push(newUser)
      response.writeHead(201, {
        'Content-Type': 'application/json'
      });

      response.end(JSON.stringify(newUser));
    })

  } else if (true) { // Atualizar um usuário
    //
  } else if (false) { // Deletar um usuário
    //
  } else { // Recurso não encontrado.
    //
  }
})

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`)
})