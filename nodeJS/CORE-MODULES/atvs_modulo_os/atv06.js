// Nota: Exercício não finalizado.
/** ATIVIDADE 6: Pesquise outros métodos e propriedades do módulo OS 
 * Crie um código que exiba informações adicionais do sistema operacional, como número IPV4 e IPV6 de rede;
 * Informações de tempo de atividade do sistema operacional em horas, minutos e segundos;
 * Diretórios temporários.
*/

const os = require('node:os');

const getNetworkInfo = () => {
    const netInterfaces = os.networkInterfaces(),
    ethernet02 = netInterfaces['Ethernet 2'];

    let numIPv4 = '', numIPv6 = ''

    ethernet02.forEach((netAdress) => {
        if (netAdress.family === "IPv4") {
            numIPv4 = netAdress.address;
        } else if (netAdress.family === "IPv6") {
            numIPv6 = netAdress.address;
        }
    })

    return `\n\tNúmero IPv4: ${numIPv4} \n\tNúmero IPv6: ${numIPv6}`;
}

console.log(`=:=:= MINHA REDE =:=:=` + getNetworkInfo())