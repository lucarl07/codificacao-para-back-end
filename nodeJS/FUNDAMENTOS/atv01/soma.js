module.exports = {
    soma(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 'Erro: algum dos valores inseridos não é numérico'
        }
        return a + b;
    }
}