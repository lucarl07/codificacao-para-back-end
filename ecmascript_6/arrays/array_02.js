/* PESQUISAR E FILTRAR DADOS DE UMA ARRAY */
const numbers = [1, 2, 3, 4, 5];

// Encontrar o primeiro elemento que satisfaz a condição
const found = numbers.find((num) => num > 2);
console.log(found);

// Encontrar todos os elementos que satisfazem a condição
const filtered = numbers.filter((num) => num < 4)
console.log(filtered.join(', '));

// Verifica se um array possui um determinado valor, retorna true ou false;
const included = numbers.includes(3)
console.log(included);

// Testa se todos os elementos do array passam no teste-lógica da função:
const every01 = numbers.every((num) => num % 2 === 0)
const every02 = numbers.every((num) => num * 0 === 0)
console.log(every01 + ', ' + every02);

// Verifica se pelo menos um elemento no array satisfaz a condição:
const some01 = numbers.some((num) => num % 2 === 0)
const some02 = numbers.every((num) => num / 5 === 2)
console.log(some01 + ', ' + some02);
