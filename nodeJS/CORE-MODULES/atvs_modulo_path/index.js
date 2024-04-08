/* Módulo PATH */
const path = require('node:path')

const arquivo01 = '/notas/2021/arquivo01.txt'

// Busca o nome do(s) diretório(s):
let dirname = path.dirname(arquivo01)   // /notas/2021
// Busca o nome do arquivo:
let basename = path.basename(arquivo01) // arquivo01.txt
// Busca a extensão do arquivo:
let extname = path.extname(arquivo01)   // .txt

console.log(`${dirname}, ${basename}, ${extname}`)

// Busca o nome do arquivo, sem a extensão:
let noExtBasename = path.basename(arquivo01, path.extname(arquivo01)) // arquivo01

console.log(noExtBasename)