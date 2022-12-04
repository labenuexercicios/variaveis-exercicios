// Exercício 1 - Parte 1

let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

/* O tipo de variavel foi undefined, porque criamos nossa variavel
sem definir valor à elas (undefined = indefinida). */

nome = prompt("Qual é o seu nome")
idade = prompt("Qual é a sua idade?")

console.log (typeof nome)
console.log (typeof idade)

/* Notei que as duas variáveis foram chamadas de strings pelo fato de que mesmo a idade sendo um numero,
foi atribuindo uma string ao perguntar no prompt. */

// console.log(`Olá ${nome}, você tem ${idade} anos.`) (opção alternativa)
console.log("Olá " + nome + ", você tem " + idade + " anos.")

// Exercício 1 - Parte 2

const perguntarCor = "Qual é sua cor favorita?"
const perguntarHobbie = "Qual é seu hobbie favorito?"
const perguntarTime = "Qual time você torce?"

let cor = prompt(perguntarCor)
let hobbie = prompt(perguntarHobbie)
let time = prompt(perguntarTime)

console.log("Sua cor favorita é " + cor)
console.log("Seu hobbie favorito é " + hobbie)
console.log("O time que você torce é " + time)

console.log(perguntarCor + " " + cor)
console.log(perguntarHobbie + " " + hobbie)
console.log(perguntarTime + " " + time)
