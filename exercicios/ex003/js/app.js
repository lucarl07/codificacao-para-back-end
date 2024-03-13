/** SISTEMA DE CONSULTÓRIO ODONTOLÓGICO
 * Feito por lucarl07.
 * Iniciado em 13/03/2024.
*/

// Declarar o input que recebe nome do paciente:
const inPaciente = document.querySelector('#inPaciente')

// Declarar botões de ação:
const btnAdicionar = document.querySelector('#btnAdicionar'),
btnUrgencia = document.querySelector('#btnUrgencia'),
btnAtender = document.querySelector('#btnAtender');

// Declarar a lista de pacientes e seu array:
const outLista = document.querySelector('#outLista');
const pacientes = [];
let listaPacientes = '';

// Caso um paciente seja adicionado em condição regular:
btnAdicionar.addEventListener('click', () => {
    listaPacientes = '';

    if (validarPaciente(inPaciente.value) == false) {
        return;
    }
    
    pacientes.push(inPaciente.value)
    pacientes.map((paciente, index) => {
        return (listaPacientes += `${index+1}. ${paciente}\n`)
    })

    outLista.textContent = '';
    outLista.textContent += listaPacientes
    inPaciente.value = '';
})

// Caso um paciente seja adicionado em condição de urgência:
btnUrgencia.addEventListener('click', () => {
    listaAnterior = listaPacientes
    listaPacientes = '';

    if (validarPaciente(inPaciente.value) == false) {
        return;
    }
    
    pacientes.unshift(inPaciente.value)
    pacientes.map((paciente, index) => {
        return (listaPacientes += `${index+1}. ${paciente}\n`)
    })

    outLista.textContent = '';
    outLista.textContent += listaPacientes
    inPaciente.value = '';
})

// Validar o nome do paciente:
const validarPaciente = (paciente) => {
    if (paciente == '' || paciente === "null") {
        window.alert(`Erro: o nome "${paciente}" é inválido, por favor substitua-o com outro.`)
        return false;
    } else {
        return true;
    }
}