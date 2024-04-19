const os = require('node:os')

// Imprime dados sobre a CPU e seus núcleos
console.log(os.cpus());

// Imprime a memória disponível em bytes
console.log(os.freemem());

// Imprime o diretório raiz da conta
console.log(os.homedir());

// Imprime o tipo de sistema operacional do computador
console.log(os.type());
