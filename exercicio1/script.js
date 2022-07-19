let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// Logo foi impresso 'undefined' pois nenhum valor foi atribuido as váriaveis criadas

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

// Foi observado que logo as váriaveis sao do tipo 'string'

console.log(`Olá ${nome}, você tem ${idade} anos!.`);