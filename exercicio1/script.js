let nome
let idade
console.log(typeof nome, typeof idade)
/*porquê a variavel não tem atribuição e nem tipagem */

nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual a sua idade?"))

console.log(typeof nome, typeof idade)
console.log(`Olá ${nome}, você tem ${idade} anos.`)
