/** ATIVIDADE 05 - Encontrar informações do ônibus por ID
 * Proposta: Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o ID da linha de ônibus a ser pesquisada:
const busRouteId = 1;

// Função para ver a disponibilidade de ônibus em uma linha:
const getRouteBuses = (id) => {
    const buses = data.onibus.filter(bus => bus.linha === id);

    if (buses.length === 0) {
        console.log('Não há ônibus para a linha especificada.')
        return;
    }

    let aboutBuses = `===== LINHA ${id} =====\n`;

    buses.forEach((bus, i) => {
        aboutBuses += `||| Ônibus ${bus.id} ||| \nModelo: ${bus.modelo} | Placa: ${bus.placa} \nMotorista: ${bus.motorista} | Status: ${bus.status}`

        if (i !== buses.length - 1) {
            aboutBuses += `\n\n`
        }
    })

    console.log(aboutBuses)
}

// Chamando a função:
getRouteBuses(busRouteId);