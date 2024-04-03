const a = 12
const z = 'Luiz'
const t = [1, 2, 3]

console.log(a, z, t)

// Contagem de Impressão:
for(let i = 0; i < 6; i++) {
    console.count(`O valor de A é ${a}, contagem`)
}

console.log('O nome %s e ele é bisonho.', z)

setInterval(() => {
    console.clear();
}, 2000)