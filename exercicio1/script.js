let nome 
let idade 

console.log(typeof nome)
console.log(typeof idade)
// o typeof da undefined(indefinido) pois não tem nenhum valor atribuido a eles.

nome = prompt("Qual o seu nome?")
idade = Number(prompt("Qual sua idade?"))

console.log(nome)
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)
// Após atribuir valor as variáveis elas aparecem com o tipo string.

console.log("Óla",nome,", você tem",idade,"anos.")

//PARTE 2

const pergunta1 = "Você joga algum jogo?"
const resposta1 = prompt(pergunta1)


const pergunta2 = "Qual jogo você joga?"
const resposta2 = prompt(pergunta2)

const pergunta3 = "Você gosta dele?"
const resposta3 = prompt(pergunta3)


console.log(pergunta1,"-",resposta1)
console.log(pergunta2,"-",resposta2)
console.log(pergunta3,"-",resposta3)

