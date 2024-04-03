// Módulo Externo:
const minimist = require('minimist')

// Módulo Interno:
const soma = require('./soma').soma

const args = minimist(process.argv.splice(2))
const a = args["numero1"], b = args["numero2"];

console.log(soma(a, b))