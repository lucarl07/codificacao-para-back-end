// 1º ESCOPO - Global
let filme = 'Senhor dos Anéis'
console.log(filme);

// 2º ESCOPO - Local
{
    let filme2 = 'Star Wars'
    console.log(filme);
    console.log(filme2);

    // 3° ESCOPO - Contexto de bloco
    if(true) {
        let filme3 = 'Barbie'
        console.log(filme)
        console.log(filme2)
        console.log(filme3)
    }
}
