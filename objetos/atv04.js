/** ATIVIDADE 04 - Filtrar ônibus por status 
 * Proposta: Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.
*/

// Chamando os dados de onibus.json:
const data = require('./onibus.json')

// Declarando o status dos ônibus a serem pesquisados:
const busStatus = "em operação";

// Função para obter uma lista de ônibus por status operacional:
const getBusesByStatus = (status) => {
    const buses = data.onibus.filter(bus => bus.status === status);
    
    // Caso não houver nenhum ônibus no status inserido:
    if (buses.length === 0) {
        console.log('Não há ônibus no status operacional especificado.')
        return;
    }

    let aboutBuses = `===== ÔNIBUS ${status.toUpperCase()} =====\n`;
    let count = 1;

    buses.forEach(bus => {
        aboutBuses += `${count}. Veículo ${bus.id} \n\tModelo: ${bus.modelo} \n\tPlaca: ${bus.placa} \n\tLinha: ${bus.linha} \n`
        count++;
    })

    console.log(aboutBuses)
}

// Chamando a função:
getBusesByStatus(busStatus)