// Exercicio 1 - Parte 1
let nome = prompt ("Qual seu nome?")  
console.log(nome)

let idade = Number ( prompt ("Qual sua idade?"))   
console.log(idade)  

console.log(typeof nome)
console.log(typeof idade)
// Acho que foi impresso para saber se os dados estão na variavel adequada ( numero em numero, texto em string)
// Castings necessarios realizados, dados nos typof corretos 


// Exercicio 1 - Parte 2
console.log("Bem vindo(a) Senhor(a):", nome,"Você tem:", idade, "anos." )

const pergA = confirm("Se você está usando uma camista azul hoje? Clique OK")
console.log(pergA)

const pergB = confirm("Se você está usando uma bermuda jeans hoje? Clique OK")
console.log(pergB)

const pergC = confirm("Se você está usando um tenis preto hoje? Clique OK")
console.log(pergC)

// Alterando de alternativa (s ou n) para escrita/digitada
const pergAA = prompt ("Você está usando uma camista azul hoje?")
console.log(pergAA)

const pergBB = prompt ("Você está usando uma bermuda jeans hoje?")
console.log(pergBB)

const pergCC = prompt ("Você está usando um tenis preto hoje?")
console.log(pergCC)

// Colocando as perguntas em variaveis
const pergAAA = "Qual a cor da sua camisa?"
const pergBBB = "Qual a cor da sua bermuda?"
const pergCCC = "Qual a cor do seu sapato?"

const respostaA = prompt ("Qual a cor da sua camisa?")
console.log(pergAAA,  respostaA)

const respostaB = prompt ("Qual a cor da sua bermuda?")
console.log(pergBBB, respostaB)

const respostaC = prompt ("Qual a cor do seu tenis?")
console.log(pergCCC, respostaC)