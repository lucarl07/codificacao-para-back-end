/* Estrutura de Dados -> ARRAY */

// Criar um array:
const array = [1, 2, 4, 6, 8];
const vetor = new Array(1, 1, 2, 3, 5);

console.log(typeof array + ':', array)
console.log(typeof vetor + ':', vetor)

// Referência aos elementos de um array:
const produtos = ["Arroz", "Feijão", "Iogurte"];
console.log(produtos[1])

// Inclusão e exclusão de elementos/itens:
const estados = ['Alagoas', 'Amazonas', 'Amapá', 'Bahia']

estados.push('Ceará') // <- Adiciona um novo elemento no final da array
console.log(estados)

estados.shift() // <- Remove o primeiro elemento da array
console.log(estados)

estados.unshift('Acre') // <- Adiciona um novo elemento no começo da array
console.log(estados)

estados.pop() // <- Remove o último elemento da array
console.log(estados)

// Apresentar dados de um array:
const cidades = ['Maceió', 'Rio Largo', 'Marechal', 'Penedo']
console.log(`${cidades.join('  |  ')}`)