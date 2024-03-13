/** DESCUBRA O NÚMERO
 * Feito por lucarl07.
 * Iniciado em 13/03/2024.
*/

// Inputs:
const inNumero = document.querySelector('#inNumero'),
btnApostar = document.querySelector('#btnApostar'),
btnJogar = document.querySelector('#btnJogar');

// Outputs:
const outErros = document.querySelector('#outErros'),
outChances = document.querySelector('#outChances'),
outDica = document.querySelector('#outDica');

const gerarNumeroAleatorio = (max) => {
    return Math.floor(Math.random() * max) + 1
}

const numSorteado = gerarNumeroAleatorio(100)

let numPossivel = parseInt(inNumero.value);
let erros = [], chances = parseInt(outChances.innerHTML);

const adivinharNumero = () => {
    if (numSorteado < numPossivel) {
        erros.push(numPossivel)
        chances--;
        
        outErros.innerHTML = erros;
        outChances.innerHTML = chances;
        outDica.innerHTML = `É um número menor que ${numPossivel}`
    } else if (numSorteado > numPossivel) {
        erros.push(numPossivel)
        chances--;
        
        outErros.innerHTML = erros;
        outChances.innerHTML = chances;
        outDica.innerHTML = `É um número maior que ${numPossivel}`
    } else {
        alert('Parabéns, você acertou!')
        outDica.innerHTML = `É o número ${numPossivel}!`
    }
}

btnApostar.addEventListener('click', adivinharNumero)