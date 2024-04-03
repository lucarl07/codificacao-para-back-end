const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Bisonho, digite seu nome: ', (nome) => {
    console.log(`O nome do bisonho é ${nome}. `)
    readline.close()
})