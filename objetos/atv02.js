/** ATIVIDADE 02 - Verificar disponibilidade de ônibus por linha
 * Proposta: Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.
*/

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o ID da linha de ônibus a ser pesquisada:
const busRouteId = 1;

// Função para ver a disponibilidade de ônibus em uma linha:
const getRouteBuses = (id) => {
    const buses = data.onibus.filter(bus => bus.linha === id);
    
    // Caso o ID inserido seja inválido:
    if (buses.length === 0) {
        console.log('Não há ônibus para a linha especificada.')
        return;
    }

    let count = 0;

    buses.forEach(bus => {
        if (bus.status === 'em operação') {
            count++
        }
    });

    let listAllStatus = count === 0 ? 'não há nenhum ônibus em operação.' : `há ${count} ônibus em operação.`

    console.log(`No momento, ${listAllStatus}`)
}

// Chamando a função:
getRouteBuses(busRouteId);