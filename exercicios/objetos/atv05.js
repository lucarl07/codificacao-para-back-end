/** ATIVIDADE 05 - Encontrar informações do ônibus por ID
 * Proposta: Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o ID da linha de ônibus a ser pesquisada:
const busId = 'A100';

// Função para ver a disponibilidade de ônibus em uma linha:
const getRouteBuses = (id) => {
    const bus = data.onibus.find(vehicle => vehicle.id === id)

    // Caso o ID inserido seja inválido:
    if (bus === undefined) {
        throw new Error('ID erroneamente digitado, ou ônibus inexistente.')
    }

    const info = `===== ÔNIBUS ${id} ===== \n - Modelo: ${bus.modelo} \n - Placa: ${bus.placa} \n - Motorista: ${bus.motorista} \n - Status: ${bus.status}`

    console.log(info)
}

// Chamando a função:
getRouteBuses(busId);

// `||| Ônibus ${bus.id} ||| \nModelo: ${bus.modelo} | Placa: ${bus.placa} \nMotorista: ${bus.motorista} | Status: ${bus.status}`