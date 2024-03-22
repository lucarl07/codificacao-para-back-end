/** VETOR NUMÉRICO
 * Feito por lucarl07.
 * Início: 20-03-2024
 */

// Adicionar campo de entrada:
const inNumber = document.querySelector('#inNumber');

// Adicionar botões para executar as funções:
const btnAddNumber = document.querySelector('#btnAddNumber')
const btnCheckOrder = document.querySelector('#btnCheckOrder');

// Adicionar o campo de saída da array:
const outArray = document.querySelector('#outArray');

// Criar a array dos números inseridos:
const numArray = [];

const adicionarNumero = () => {
    let number = inNumber.value
    outArray.textContent = "";

    if(isNaN(number) || number === "") {
        alert('Erro: O valor inserido não é um número, ou o campo está vazio.')
        inNumber.focus()
        return;
    }

    if (numArray.includes(number)) {
        alert(`Erro: O valor ${number} já foi adicionado no vetor.`)
        return;
    } else {
        numArray.push(number)
    }

    inNumber.value = "";
    numArray.forEach((num, i) => {
        outArray.textContent += `[${i++}] - ${num}\n`
    })
}

const verificarOrdem = () => {
    let sortedArray = numArray.sort((a, b) => a - b);
    console.log(sortedArray)

    if (numArray === sortedArray) {
        alert('A array está organizada em ordem crescente.')
    } else {
        alert('A array não está em ordem crescente.')
    }
}

// Adicionar detectores de evento aos botões:
btnAddNumber.addEventListener('click', adicionarNumero)
btnCheckOrder.addEventListener('click', verificarOrdem)

// =:=:=:=:= FIM DO CÓDIGO =:=:=:=:=