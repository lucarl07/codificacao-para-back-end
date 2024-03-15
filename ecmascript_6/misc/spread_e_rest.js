/* OPERADOR SPREAD E REST => ... */

// Uso do Spread:
const arrayNatural = [1, 2, 3, 4]
const arrayFakeNatty = [...arrayNatural]
console.log(arrayFakeNatty); // [ 1, 2, 3, 4 ]

const array1 = ['A', 'B', 'C', 'D']
const array2 = ['E', 'F', 'G', 'H']
const juntar = [...array1, ...array2]
console.log(juntar); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ]

const objOriginal = {nome: 'Carlos', idade: 23}
const objCopiado = {...objOriginal}
console.log(objCopiado); // { nome: 'Carlos', idade: 23 }

const objNovosDados = {...objOriginal, profissao: 'Developer', estado: 'AL'}
console.log(objNovosDados); // { nome: 'Carlos', idade: 23, profissao: 'Developer', estado: 'AL' }

// Uso do Rest:
function soma(...numeros) {
    return numeros.reduce((total, n) => total + n, 0)
}

console.log(soma(1, 2, 3, 4, 5)) // 15
console.log(soma(1, 1, 2, 3, 5, 8)) // 20

function multiplicacao(...numeros) {
    return numeros.reduce((total, n) => total * n, 1)
}

console.log(multiplicacao(1, 3, 5, 7, 9)) // 945
console.log(multiplicacao(2, 4, 6, 8, 10)) // 3840