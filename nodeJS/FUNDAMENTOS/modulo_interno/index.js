const meuModulo = require('./meu_modulo');
console.log(meuModulo)

const soma = meuModulo.soma, 
subtracao = meuModulo.subtracao;
const divisao = meuModulo.divisao,
multiplicacao = meuModulo.multiplicacao;
const aoQuadrado = meuModulo.aoQuadrado;

soma(2, 3)
subtracao(2, 1)
divisao(5, 4)
multiplicacao(3, 3)
aoQuadrado(2)