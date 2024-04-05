/** ATIVIDADE 2: Informações do Processador 
 * Escreva um código que exiba as informações de cada processador do sistema, incluindo a velocidade, o modelo e o identificador.
 * Utilize o método os.cpus() para obter as informações.
*/

const os = require('node:os')
const cpus = os.cpus()

let listCpu = '';

cpus.forEach((cpu, i) => {
    listCpu += `=:=:= PROCESSADOR ${i+1} =:=:= \n\tModelo: ${cpu.model} \n\tVelocidade: ${cpu.speed} MHz \n`
})

console.log(listCpu)