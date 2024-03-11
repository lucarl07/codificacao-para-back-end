// Uso do método this:
const pessoa = {
    nome: 'Carlos',
    saudacao: 'Olá, seus monstros!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar();

// Uso da função bind para obter o contexto léxico de "pessoa":
const pessoaFala = pessoa.falar.bind(pessoa);
pessoaFala()

// Uso do this em uma classe (com arrow function):
function Pessoa1() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}
new Pessoa1;

function Pessoa2() {
    this.idade = 0
    const self = this;

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000);
}
new Pessoa2;
