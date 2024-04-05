/** ATIVIDADE 3: Informações de Memória 
 * Escreva um código que exiba a quantidade total de memória do sistema em bytes.
 * Em seguida, converta o valor para uma unidade mais legível, como kilobytes (KB), megabytes (MB) ou gigabytes (GB).
*/

const os = require('node:os');

const memoryBytes = os.totalmem();

const memoryMb = (memoryBytes / 1000000).toFixed(),
memoryGb = (memoryMb / 1000).toFixed();

console.log(`Memória total: ${memoryMb} MB ou ${memoryGb} GB`)