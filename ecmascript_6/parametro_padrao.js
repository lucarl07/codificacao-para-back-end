/* MÉTODO PADRÃO */
// Imprimir função com parâmetros aguardando argumentos:
function test(x, y, z) {
    return x + y + z
}
console.log(test(), test(2), test(1, 2, 3), test(0, 0, 0))

/* MÉTODOS PRÉ-ES6 */
// Imprimir função com parâmetros padrões caso não haja argumentos (com operador de comparação "OU"):
function soma(x, y, z) {
    x = x || 1
    y = y || 1
    z = z || 1
    return x + y + z
}
console.log(soma(), soma(2), soma(1, 2, 3), soma(0, 0, 0))

// Imprimir função com parâmetros padrões caso não haja argumentos (com condicional "if"):
function soma2(x, y, z) {
    if (x == undefined) {
        x = 1
    }
    if (y == undefined) {
        y = 1
    }
    if (z == undefined) {
        z = 1
    }
    return x + y + z
}
console.log(soma2(), soma2(2), soma2(1, 2, 3), soma2(0, 0, 0))

// Imprimir função com parâmetros padrões caso não haja argumentos (com operador ternário):
function soma3(x, y, z) {
    x = x !== undefined ? x : 1;
    y = 1 in arguments ? y : 1;
    z = isNaN(z) ? 1 : z;
    return x + y + z
}
console.log(soma3(), soma3(2), soma3(1, 2, 3), soma3(0, 0, 0))

/* MÉTODO ES6 */
// Imprimir função com parâmetros predefinidos:
function soma4(x = 1, y = 1, z = 1) {
    return x + y + z
}
console.log(soma4(), soma4(2), soma4(1, 2, 3), soma3(0, 0, 0))