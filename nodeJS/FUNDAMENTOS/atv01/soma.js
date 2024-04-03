const colors = require('colors');

module.exports = {
    soma(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return (' Erro:'.bold + ' algum dos valores inseridos não é numérico. ').bgRed
        }
        return ` A soma de ${a} e ${b} é igual a ${a+b} `.bgGreen;
    }
}