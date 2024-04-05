/** ATIVIDADE 5: Detalhes do Sistema Operacional
 * Escreva um código que exiba informações detalhadas sobre o sistema operacional, como o nome, a versão e a plataforma.
 * Utilize os métodos apropriados do módulo OS para obter as informações necessárias.
 */

const os = require('node:os');

const sysName = os.type().replace('_',' ');
const sysVersion = os.version();
const sysPlatform = os.arch();

console.log(`=:=:= MEU SISTEMA =:=:= \n\tNome: ${sysName} \n\tVersão: ${sysVersion} \n\tPlataforma: ${sysPlatform}`)