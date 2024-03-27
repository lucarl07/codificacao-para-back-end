/** ATIVIDADE 07 - Listar todas as linhas disponíveis
 * Proposta: Implemente uma função que retorne uma lista de todas as linhas disponíveis, juntamente com os horários de partida e chegada.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Função para retornar todas as linhas de ônibus:
const getAllBusRoutes = () => {
    const routes = data.linhas;

    let response = '';

    routes.forEach((route, i) => {
        let departureT = route.horarios.map(h => {
            return h.saida;
        }).join(', ')
        
        let arrivalT = route.horarios.map(h => {
            return h.chegada;
        }).join(', ')
        
        let nStops = route.paradas.length,
        firstStop = route.paradas[0].nome,
        lastStop = route.paradas[nStops-1].nome;

        response += `${i+1}. ${route.nome} (ID ${route.id}) \n\tHorários de chegada: ${departureT} \n\tHorários de saída: ${arrivalT} \n\tParada inicial: ${firstStop} \n\tParada final: ${lastStop}\n`

        if (i < routes.length - 1) {
            response += `\n`
        }
    })

    console.log(response)
}

// Chamando a função:
getAllBusRoutes()