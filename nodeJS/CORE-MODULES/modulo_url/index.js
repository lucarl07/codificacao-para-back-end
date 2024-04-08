const url = require('node:url')
const address = "https://www.meusite.com.br/catalog?produtos=geladeira"
const parseUrl = new url.URL(address)

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams.get('produtos'));