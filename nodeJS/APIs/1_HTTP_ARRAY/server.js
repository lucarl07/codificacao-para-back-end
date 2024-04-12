import http, { get } from 'node:http';

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

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") { // Buscar todos os usuários

    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));

  } else if (method === "GET" && url.startsWith("/users/")) { // Buscar um único usuário
    
    const userId = url.split('/')[2]
    console.log(`Usuário pesquisado: ${userId}`)

    const user = users.find(user => user.id == userId);
    
    if (user) {
      response.setHeader("Content-Type", "application/json")
      response.end(JSON.stringify(user));
    } else {
      response.writeHead(404, {"Content-Type": "application/json"})
      response.end(JSON.stringify({ 
        name: "Troll Shah", 
        message: `Usuário ${userId} não encontrado.`
      }));
    }

  } else if (method === "POST" && url === "/users") { // Cadastrar um usuário
    
    let body = '';

    request.on('data', (chunk) => {
      body += chunk.toString()
    })
    
    request.on('end', () => {
      const newUser = JSON.parse(body)
      newUser.id = users.length + 1;
      
      users.push(newUser)
      response.writeHead(201, {
        'Content-Type': 'application/json'
      });

      response.end(JSON.stringify(newUser));
    })

  } else if (method === "PUT" && url.startsWith("/update_user/")) { // Atualizar um usuário

    const userId = url.split('/')[2]
    console.log(`Usuário a atualizar: ${userId}`);
    
    let body = '';

    request.on("data", (chunk) => {
      body += chunk.toString()
    });

    request.on("end", () => {
      const updateUser = JSON.parse(body)
      const index = users.findIndex(user => user.id == userId)

      if (index !== -1) {
        users[index] = {...users[index], updateUser}
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users[index]));
      } else {
        response.writeHead(404, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: `Erro ao tentar atualizar o usuário ${index}.`}));
      }
    });

  } else if (method === "DELETE" && url.startsWith("/delete_user/")) { // Deletar um usuário
    
    const userId = url.split('/')[2]
    const index = users.findIndex(user => user.id == userId);
    console.log(`Usuário a ser apagado: ${userId}`);

    if (index !== -1) {
      users.splice(index, 1)
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({
        message: `Usuário ${userId} excluído com sucesso.`,
        check_users: `Acesse GET http://localhost:4010/users para ver os usuários disponíveis.`
      }));
    } else {
      response.writeHead(404, {"Content-Type": "application/json"})
      response.end(JSON.stringify({
        message: `Erro ao tentar remover o usuário ${userId}.`
      }));
    }

  } else { // Recurso não encontrado.
    response.writeHead(404, {"Content-Type": "application/json"})
    response.end(
      JSON.stringify({message: `Recurso não encontrado.`})
    )
  }
})

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`)
})