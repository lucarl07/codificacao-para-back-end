/** ATIVIDADE 1: Informações do Sistema Operacional 
 * Escreva um código que exiba o nome da plataforma do sistema operacional em que o Node.js está sendo executado.
 * Em seguida, exiba também a arquitetura do sistema operacional.
*/

const os = require('node:os')

const platform = os.platform()
const arch = os.arch()

console.log(`Plataforma da OS: ${platform} \nArquitetura: ${arch}`);
