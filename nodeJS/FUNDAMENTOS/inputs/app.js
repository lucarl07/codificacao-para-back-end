const colors = require('colors')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p01',
            message: 'Qual a primeira nota?'
        },
        {
            name: 'p02',
            message: 'Qual a segunda nota?'
        }
    ])
    .then(answers => {
        const numAnswers = Object.keys(answers).length;
        const average = (Number(answers.p01) + Number(answers.p02)) / numAnswers

        if (isNaN(Number(answers.p01)) || isNaN(Number(answers.p02))) {
            console.log(('Erro: '.bold + 'digite somente números reais.').bgYellow)
            return;
        }

        if (average >= 6) {
            console.log(`Aluno aprovado com média ${average}!`.bgGreen)
        } else {
            console.log(`Aluno reprovado com média ${average}.`.white.bgRed)
        }
    })
    .catch()