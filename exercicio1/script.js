let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

//Foi impresso "undefined" porque eu não atribui nenhum valor a elas.

/*nome = String(nome)
idade = Number(idade)*/

nome = prompt("Qual seu nome?")
idade = prompt("Quantos anos você tem?")

console.log(typeof nome)
console.log(typeof idade)

// Eu notei aqui que logo após ter valores atribuidos as variaveis, elas passaram ser do tipo "String" inclusive a idade, daria pra converter a variavel "idade" para number.

console.log(`Olá ${nome}, você tem ${idade} anos!`)
