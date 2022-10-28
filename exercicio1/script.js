// Exercício 1 - Parte 1
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
//Esse tipo de variável "let" foi impresso porque criamos a variaável sem atribuir valor a ela
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
console.log(typeof nome)
console.log(typeof idade)
//As variáveis tornaram-se String
console.log("Olá,",nome,", você tem", idade , "anos." )
//Parte - 2
const pergunta1 = "Você gosta da Labenu? (sim/não)"
const pergunta2 = "Você gosta de codar? (sim/não)"
const pergunta3 = "Você gosta de Javascript? (sim/não)"
const resposta1 = prompt(pergunta1)
const resposta2 = prompt(pergunta2)
const resposta3 = prompt(pergunta3)

console.log(pergunta1, "resposta ->",resposta1)
console.log(pergunta2, "resposta ->",resposta2)
console.log(pergunta3, "resposta ->",resposta3)

