const minimist = require('minimist');

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args["nome"].replace('_',' ')
const idade = args["idade"]
console.log(`Nome: ${nome} \nIdade: ${idade}`)