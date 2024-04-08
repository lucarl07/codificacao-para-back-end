const http = require('node:http')
const PORT = 3050;

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')

  if (!name) {
    res.end(`
      <h1>Preencha seus dados:</h1>

      <form method="GET">
        <p>
          <label for="inName">Nome:</label>
          <input type="text" name="name" id="inName" />
        </p>

        <p>
          <label for="rdGender">Sexo:</label>
          <input type="radio" name="gender" value="masc" /> Masculino
          <input type="radio" name="gender" value="femi" /> Feminino
        </p>

        <input type="submit" value="Enviar"/>
      </form>
    `);
  } else {
    res.end(`
      <h1>Seja bem-vindo, ${name}!</h1>
    `);
  }
})

server.listen(PORT, () => {
  console.log(`O pai tá on B) \nServer on PORT ${PORT}`)
})