// Parte 1
/*
let nome
let idade

console.log(typeof nome);
console.log(typeof idade);

// As duas variáveis são "undefined" porque ainda não foram atribuidos valores a elas

nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual é a sua idade?"))

console.log(typeof nome);
console.log(typeof idade);

// O comando devolveu string e number respectivamente porque consegui fazer o cast logo no prompt. Assim, não tive nenhum problema relacionado com os tipos de dados.

console.log("Olá "+nome+", você tem "+idade+" anos"); 
// console.log("Olá ",nome,", você tem ",idade," anos"); */

// Parte 2

let temPet = prompt("Você têm pet? Por favor, responda apenas SIM ou NAO");
let viajeFora = prompt("Você já viajou fora do Brasil? Por favor, responda apenas SIM ou NAO");
let dormeBem = prompt("Você dorme bem? Por favor, responda apenas SIM ou NAO");

console.log("Você têm pet? - "+temPet);
console.log("Você já viajou fora do Brasil? - "+viajeFora);
console.log("Você dorme bem? - "+dormeBem);