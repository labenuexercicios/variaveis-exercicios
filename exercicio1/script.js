const nome = prompt("Qual o seu nome?") //Comando apenas prompt sera sempre String
let idade = Number(prompt("Qual a sua idade?")) //Declarar Number(prompt), diz que esse prompt e um numero.

console.log(nome, typeof nome)
console.log(idade, typeof idade)
console.log(`Ola ${nome}, voce tem ${idade} anos`)