const seuNome = "Julia"
let suaIdade = 29
console.log(seuNome)
console.log(suaIdade)
console.log(typeof seuNome,suaIdade)
/*Imprimiu no console o erro "Uncaught SyntaxError: Unexpected identifier 'idade'"
Esse erro aconteceu por não atribuir um valor a varíavel, fazendo com que o console não entenda nenhum valor*/

let idade = Number ( prompt("Quantos anos você tem?") )
const nome = prompt("Qual o seu nome?")

console.log(idade)
console.log(nome)
console.log(typeof idade)
console.log(typeof nome)
//os tipos atribuídos no console foram number para "idade" e string para "nome"

console.log("Olá!",nome,"você tem",idade,"anos")

catCheck = confirm("Você tem gato?")
console.log(catCheck)

dogCheck = confirm("Você tem cachorro?")
console.log(dogCheck)

birdCheck = confirm("Você tem pássaro?")
console.log(birdCheck)

const perguntaA = "Você tem gato?"
const respostaA = prompt(perguntaA)
console.log(perguntaA,respostaA)

const perguntaB = "Você tem cachorro?"
const respostaB = prompt(perguntaB)
console.log(perguntaB,respostaB)

const perguntaC = "Você tem pássaro?"
const respostaC = prompt(perguntaC)
console.log(perguntaC,respostaC)
