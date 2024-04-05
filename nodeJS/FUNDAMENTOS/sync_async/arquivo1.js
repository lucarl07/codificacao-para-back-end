/** Programação Síncrona (Estática) */

// Declarando o File System:
const fs = require('fs');

// Executando o programa:
console.log('===== Start =====')

fs.writeFileSync('Arquivo1.txt', 'Olá')

console.log('====== End ======')