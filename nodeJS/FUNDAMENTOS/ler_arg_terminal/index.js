// console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = String(args[0].split('=')[1]).replace('_',' ')

const idade = Number(args[1].split('=')[1])

console.log(`${nome} \n${idade} anos`)