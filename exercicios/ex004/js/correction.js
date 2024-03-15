/** DESCUBRA O NÚMERO (Correção)
 * Feito por lucarl07.
 * Iniciado em 15/03/2024.
*/

// Declarar valores necessários para a execução
const erros = [], tentativas = 6;
const numeroSorteado = Math.floor(Math.random() * 100) + 1;

// Declarar botões
const btnJogar = document.getElementById('btnJogar'),
btnApostar = document.getElementById('btnApostar');

const apostarNumero = () => {
    const inNumero = document.getElementById('inNumero');
    let numero = Number(inNumero.value);

    if (numero <= 0 || isNaN(numero)) {
        alert('O número digitado é inválido.')
        inNumero.focus()
        return;
    }

    const outErros = document.getElementById('outErros');
    const outChances = document.getElementById('outChances');
    const outDica = document.getElementById('outDica');

    if (numero == numeroSorteado) {
        alert('Você acertou!')
        btnApostar.disabled = true;
        outDica.textContent = `Parabéns, é o número ${numeroSorteado}!`;
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert(`Você já apostou o ${numero}... \nTente outro número.`)
        } else {
            erros.push(numero)

            let numErros = erros.length
            let numChances = tentativas - numErros

            outErros.textContent = `${numErros} (${erros.join(', ')})`
            outChances.textContent = numChances;

            if (numChances == 0) {
                btnApostar.disabled = true;
                outDica.textContent = `Fim de jogo! O número sorteado era ${numeroSorteado}.`
            } else {
                let dica = numero < numeroSorteado ? "maior" : "menor";
                outDica.textContent = `Tente um número ${dica} que ${numero}.`
            }
        }
    }

    inNumero.value = '';
    inNumero.focus();
}

btnApostar.addEventListener('click', apostarNumero)
btnJogar.addEventListener('click', () => {
    window.location.reload()
})