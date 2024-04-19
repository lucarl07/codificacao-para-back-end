const fs = require('node:fs')
const http = require('node:http')
const url = require('node:url')
const PORT = 5030

const server = http.createServer((req, res) => {
  const {url, method} = req;

  if (url === '/' && method === 'GET') {
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name;
    const email = urlInfo.query.email;
    
    if (!name) {
      console.log('GET url_data')
    
      fs.readFile('index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html')
        res.write(data)
        return res.end();
      })
    } else if (name && email) {
      console.log('Olá mundo!')
    }
  }
})
.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`)
})

/**
 * const urlInfo = require('node:url').parse(req.url, true)
    const {name, email, first_pw} = urlInfo.query;

    if (name === undefined || email === undefined || first_pw === undefined) {
      fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        return res.end();
      })
    } else {
      const data = {
        name: name,
        email: email,
        password: first_pw
      }

      fs.writeFile('data.json', JSON.stringify(data), () => {
        res.writeHead(302, {location: '/'})
        return res.end();
      })
    }
 */