/** ATIVIDADE 03 - Listar todas as paradas de uma linha
 * Proposta: Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o ID da linha de ônibus a ser pesquisada:
const busRouteId = 2;

// Função para obter todas as paradas da linha:
const getBusStops = (id) => {
    const busRoute = data.linhas.find(route => route.id === id);

    // Caso o ID inserido seja inválido:
    if (busRoute === undefined) {
        throw new Error('ID erroneamente digitado, ou linha de ônibus inexistente.')
    }

    const busStops = busRoute.paradas;
    let aboutStops = `===== LINHA ${id} =====\n`;

    busStops.forEach(stop => {
        aboutStops += `${stop.ordem}. ${stop.nome} (${stop.id}) \n\tX: ${stop.latitude} \n\tY: ${stop.longitude}\n`
    })

    console.log(aboutStops)
}

// Chamando a função:
getBusStops(busRouteId);