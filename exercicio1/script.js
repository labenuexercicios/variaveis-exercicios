//Parte 1
console.log("Parte 1 --------------------------")
let nome
let idade

console.log(typeof nome, typeof idade)

/*
apareceu undefined pois ainda não há valor atribuído às variáveis.
*/

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

/*
tive um erro porque primeiramente disse que a 
minha variável NOME era uma constante sem valor definido.
justei o erro mudando de CONST para LET
*/

console.log(typeof nome, typeof idade)

/*
Ambas variáveis são Strings mesmo a idade sendo digitada como número
*/

console.log("Olá", nome, "você tem", idade, "anos.")


//Parte 2
console.log("Parte 2 --------------------------")

let resposta1 = prompt("Está chovendo canivete?")
let resposta2 = prompt("Você viu um gatinho?")
let resposta3 = prompt("Você tem um unicórnio?")

console.log(resposta1, resposta2,resposta3)

let pergunta4 = "Está chovendo canivete?"
let pergunta5 = "Você viu um gatinho?"
let pergunta6 = "Você tem um unicórnio?"

let resposta4 = prompt(pergunta4)
let resposta5 = prompt(pergunta5)
let resposta6 = prompt(pergunta6)

console.log("\n" + pergunta4, ":", resposta4, "\n" + pergunta5, ":", resposta5, "\n" + pergunta6, ":", resposta6)