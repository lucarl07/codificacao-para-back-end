/** ATIVIDADE 06 - Verificar se há motorista atribuído
 * Proposta: Escreva uma função que aceite o ID de um ônibus como entrada e verifique se há um motorista atribuído a esse ônibus.
 */

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o ID do ônibus a ser pesquisado:
const busId = 'A101'

// Função para verificar o motorista atribuído:
const getBusDriver = (id) => {
    const bus = data.onibus.find(vehicle => vehicle.id === id)

    // Caso o ID inserido seja inválido:
    if (bus === undefined) {
        throw new Error('ID erroneamente digitado, ou ônibus inexistente.')
    }

    let driverStatus = bus.motorista !== null ? `O motorista para o ônibus ${id} é ${bus.motorista}.` : `Não há um motorista atribuído para o ônibus ${id}.`

    console.log(`${driverStatus}`)
}

// Chamando a função:
getBusDriver(busId)