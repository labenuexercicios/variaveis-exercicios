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

let perguntaA = "Você têm pet?";
let temPet = prompt(perguntaA);
let perguntaB = "Você já viajou fora do Brasil?";
let viajeFora = prompt(perguntaB);
let perguntaC = "Você dorme bem?";
let dormeBem = prompt(perguntaC);


console.log(`${perguntaA} - ${temPet}`);
console.log(`${perguntaB} - ${viajeFora}`);
console.log(`${perguntaC} - ${dormeBem}`);