/*exercício 01*/
let nome
let idade

console.log (typeof nome); //undefined, não foi atribuído valor
console.log (typeof idade); //undefined, não foi atribuído valor

nome = prompt("Qual é seu nome?")
console.log(nome);

idade = prompt("Qual sua idade?")
console.log(idade);

console.log (typeof nome); //string
console.log (typeof idade); //string

console.log( "Olá", nome, "você tem", idade, "anos")