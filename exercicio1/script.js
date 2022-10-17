let nome
let idade
console.log(typeof nome);
console.log(typeof idade);

/*
Foi impresso undefined porque não foi atribuido nenhum valor
*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome);
console.log(typeof idade);

/*
Foram impressos as variaveis inseridas no formato string.
*/

console.log ("Olá", nome, "você tem", idade, "anos")