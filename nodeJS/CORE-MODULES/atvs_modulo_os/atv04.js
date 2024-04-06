/** ATIVIDADE 4: Informações do Usuário
 * Escreva um código que exiba o nome do usuário do sistema atual.
 * Em seguida, exiba também o diretório inicial do usuário.
 */

const os = require('node:os');

const userInfo = os.userInfo(),
username = userInfo.username,
homedir = userInfo.homedir;

console.log(`Nome do usuário: ${username} \nDiretório raiz: ${homedir}`);
