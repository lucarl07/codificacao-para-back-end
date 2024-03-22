const numeros = [];

const inNumero = document.getElementById('inNumber');

const btnAdicionar = document.getElementById('btnAddNumber')
const btnVerificarOrdem = document.getElementById('btnVerificaOrdem');

const outNumeros = document.getElementById('outNumbers')
const outResposta = document.getElementById('outAnswer');

const adicionarNumero = () => {
    const numero = Number(inNumero.value);
    
    if (numero === 0 || isNaN(numero)) {
        alert('Número inválido!')
        return;
    }
    
    const contemIgual = numeros.includes(numero)

    if(contemIgual) {
        alert('Número repetido!')
        inNumero.value = ''
        inNumero.focus()
        return;
    }
    numeros.push(numero);

    outNumeros.textContent = `${numeros.join(', ')}`
    inNumero.value = '';
}
btnAdicionar.addEventListener('click', adicionarNumero)

const verificarOrdem = () => {
    if (numeros.length === 0) {
        alert('Não há elementos no array de números!')
        return;
    }

    const verificaArray = numeros.every((numero, index) => {
        if (index === numeros.length - 1) {
            return true;
        }
        return numero < numeros[index+1];
    });

    if (verificaArray) {
        outResposta.textContent = `Crescente`
    } else {
        outResposta.textContent = `Não estão em ordem crescente`
    }
}
btnVerificarOrdem.addEventListener('click', verificarOrdem)