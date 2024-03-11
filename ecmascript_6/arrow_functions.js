// Função anônima regular:
let circleArea = function(r) {
    let PI = Math.PI
    let area = PI * r * r
    return area.toFixed(2);
}

console.log(circleArea(6));

// Arrow function (função de seta):
let circleArea2 = (r) => {
    let PI = Math.PI
    let area = PI * r * r
    return area.toFixed(2);
}

console.log(circleArea(6));

let circleArea3 = (r) => (Math.PI * r * r).toFixed(2)
console.log(circleArea3(6))