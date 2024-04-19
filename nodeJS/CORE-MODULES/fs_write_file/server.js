const fs = require('node:fs')
const http = require('node:http')
const PORT = 5020;

const server = http.createServer((req, res) => {
  const urlInfo = require('node:url').parse(req.url, true)
  const name = urlInfo.query.name;

  if (name === undefined) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write(data)
      return res.end();
    })
  } else if (name === '!admin:clear') {
    const currentDate = new Date();
    const clearTxt = `File cleared at ${currentDate} \r\n`

    /** WriteFile vs. AppendFile:
     * fs.writeFile() = Escreve sobrescrevendo as informações anteriores
     * fs.appendFile() = Escreve mantendo as informações pré-colodadas
     */
    fs.writeFile('arquivo.txt', clearTxt, (err) => {
      res.writeHead(302, {
        location: '/'
      })
      return res.end();
    })
  } else {
    const nlName = name + ',\r\n'

    fs.appendFile('arquivo.txt', nlName, (err) => {
      res.writeHead(302, {
        location: '/'
      })
      return res.end();
    })
  }

})
.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`)
})