/** Programação Assíncrona */

// Declarando o File System:
const fs = require('fs');

// Executando o programa:
console.log('===== Start =====')

const endProgram = () => console.log('====== End ======');

fs.writeFile('Arquivo2.txt', 'Hello world!', () => {
    setTimeout(() => {
        console.log('Arquivo criado!')
        endProgram();
    }, 1500)
});
