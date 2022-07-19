let nome = null;

let idade = null;

console.log(nome, idade)
// Porque null é do tipo objeto

nome = prompt("Qual seu nome?");
idade = Number(prompt("Qual a sua idade?"));

console.log(nome, idade)

// A variável nome agora é uma string e a idade é um num

console.log("Olá " + nome + ", você tem " + idade + " anos.");


