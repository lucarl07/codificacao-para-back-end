/* CLASSIFICAR OS ITENS DE UM VETOR */
const nomes = ['Marcos César', 'Jeanynne Leite', 'Marcos Alves', 'Jeffles Layon']
const numeros = [12, 20, 15, 6, 8, 17, 4, 24]

console.log(nomes.sort()) // <- Ordena itens de forma crescente
console.log(nomes.reverse()) // <- Ordena itens de forma decrescente

console.log(numeros.sort().join(', '))
console.log(numeros.reverse().join(', '))
// ⇱ Esses comandos ordenam números pelo primeiro caractere.

console.log(numeros.sort((a, b) => a - b).join(', ')) // <- Ordena números de forma crescente
console.log(numeros.sort((a, b) => b - a).join(', ')) // <- Ordena números de forma decrescente
// ⇱ Já esses comandos ordenam números da forma correta.