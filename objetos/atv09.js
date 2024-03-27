/** ATIVIDADE 09 - Calcular tempo de viagem por linha
 * Proposta: Crie uma função que calcule o tempo médio de viagem para uma linha específica com base nos horários de partida e chegada.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Função para obter o tempo médio das viagens:
const getAverageTravelTime = (id) => {
    const busRoute = data.linhas.find(route => route.id === id)

    // Caso o ID inserido seja inválido:
    if (busRoute === undefined) {
        console.log('ID erroneamente digitado, ou linha de ônibus inexistente.')
        return;
    }
    
    const commutes = busRoute.horarios.map(obj => {
        return getTotalTravelTime(obj.saida, obj.chegada);
    })


    console.log(commutes)
}

// Função para obter o tempo percorrido em uma viagem:
const getTotalTravelTime = (depT, arrT) => {
    const depHours = depT.slice(0, 2), depMins = depT.slice(3)
    const arrHours = arrT.slice(0, 2), arrMins = arrT.slice(3)

    const start = new Date(0, 0, 0, depHours, depMins)
    const end = new Date(0, 0, 0, arrHours, arrMins)

    return (end - start);
}

// Função para converter milissegundos em horas e minutos:
const toHoursAndMinutes = (millis) => {
    let hours = millis / 3600000;
    let minutes = millis / 60000;

    console.log(`${hours}:${minutes}`)
}

// Declarando o ID da linha de ônibus desejada:
const busRouteId = 1;

// Chamando a primeira função:
getAverageTravelTime(busRouteId)
toHoursAndMinutes(3600000)