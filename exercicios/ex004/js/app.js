/** DESCUBRA O NÚMERO
 * Feito por lucarl07.
 * Iniciado em 13/03/2024.
*/

// Entrada de dados:
const inNumero = document.querySelector('#inNumero'),
btnApostar = document.querySelector('#btnApostar'),
btnJogar = document.querySelector('#btnJogar');

// Saída de dados:
const outErros = document.querySelector('#outErros'),
outChances = document.querySelector('#outChances'),
outDica = document.querySelector('#outDica');

// Gerar número inteiro aleatório:
const gerarNumeroAleatorio = (max) => Math.floor(Math.random() * max) + 1;
const numSecreto = gerarNumeroAleatorio(100)

// Valores no output:
let erros = [], chances = parseInt(outChances.innerHTML);

const adivinharNumero = () => {
    // Adicionar string de erro formatado e o número possível
    let formatarErr = '';
    let numPossivel = parseInt(inNumero.value);

    // Comparar o número secreto com o chute
    if (numSecreto !== numPossivel) {
        validarNumero(formatarErr, numPossivel);
    } else {
        alert(`Parabéns, você acertou! \nO número secreto é ${numPossivel}`)
        outDica.innerHTML = `É o número ${numSecreto}!`
        inNumero.value = '';
    }
}

const validarNumero = (listaErros, chute) => {
    // Adicionar número errado na array "erros"
    erros.push(chute)
    listaErros = `(${erros.join(', ')})`

    // Expor valores no HTML
    chances--;
    outErros.innerHTML = listaErros;
    outChances.innerHTML = chances;

    // Expor a dica e limpar o campo de entrada
    if (numSecreto < chute) {
        outDica.innerHTML = `É um número menor que ${chute}`
    } else {
        outDica.innerHTML = `É um número maior que ${chute}`
    }
    inNumero.value = '';
}

btnApostar.addEventListener('click', adivinharNumero)