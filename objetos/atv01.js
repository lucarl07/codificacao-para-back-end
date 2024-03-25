/** ATIVIDADE 01 - Consultar horários de partida e chegada por linha
 * Proposta: Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o ID da linha de ônibus a ser pesquisada:
const busRouteId = 2;

// Função para obter os horários de uma linha de ônibus:
const getRouteSchedule = (id) => {
    const busRoute = data.linhas.find(route => route.id === id);
    
    // Caso o ID inserido seja inválido:
    if (busRoute === undefined) {
        throw new Error('ID erroneamente digitado, ou linha de ônibus inexistente.')
    }

    const busSchedule = busRoute.horarios,
    arrival = busSchedule.map(obj => obj.chegada).join(' | '),
    departure = busSchedule.map(obj => obj.saida).join(' | ');

    console.log(`HORÁRIOS DE CHEGADA: \n${arrival} \nHORÁRIOS DE SAÍDA: \n${departure}`)    
}

// Chamando a função mencionada acima:
getRouteSchedule(busRouteId);