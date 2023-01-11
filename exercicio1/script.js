let nome 
let idade

console.log ("Tipo de variável nome é:", typeof(nome), "\n Tipo da variável idade é:", typeof(idade))

//a variável é undefined, porque não houve valor atribuido.

nome = prompt("Digite o seu nome")
idade = prompt ("Digite sua idade")

console.log("olá", nome, "você tem", idade, "anos")

const perguntaA= "você está animado para programar?"
const perguntaB= "O que você esta achando do curso?"
const perguntaC= "Quantas horas você estuda por dia?"

const prespostaA = prompt(perguntaA)
const respostaB = prompt(perguntaB)
const respostaC = prompt(perguntaC)

console.log("Primeira pergunta:\n" + perguntaA + "\n" + "Resposta:\n" + respostaA)
console.log("Primeira pergunta:\n" + perguntaB + "\n" + "Resposta:\n" + respostaB)
console.log("Primeira pergunta:\n" + perguntaC + "\n" + "Resposta:\n" + respostaC)