let nome
let idade

console.log("Tipo nome", typeof nome)
console.log("Tipo idade", typeof idade)

/* Foi impresso este resultado, pois não foi atribuido valor algum a variável */
nome = prompt("Qual o seu nome?")
idade = prompt("Informe a sua idade")

console.log("Tipo nome", typeof nome)
console.log("Tipo idade", typeof idade)

/* Como foi atribuido valores as variaveis, fui mudado o tipo delas a partir da linha 8 */

console.log("Olá", nome, "Você tem", idade, "anos")

/* Parte 2 */

const perguntaA = "Você é hetero?"
const respostaA = prompt(perguntaA)

const perguntaB = "Você gosta de esporte?"
const respostaB = prompt(perguntaB)

const perguntaC = "Você é programador profissional?"
const respostaC = prompt(perguntaC)

console.log(perguntaA, "-", respostaA)
console.log(perguntaB, "-", respostaB)
console.log(perguntaC, "-", respostaC)
