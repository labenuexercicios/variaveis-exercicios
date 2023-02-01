// Etapa 1-1

/*
let nome 
let idade 
console.log("Variável" , nome, "é do tipo" , typeof nome)
console.log("Variável" , idade, "é do tipo" , typeof idade)
O resultado foi undefined pois não foi declarado nenhum 
valor para varável nome e idade.
*/ 
// Etapa 1-2

/*
let nome = prompt("Qual seu nome?")
let idade = Number (prompt("Quantos anos vocÊ tem?"))
console.log("Variável" , nome, "é do tipo" , typeof nome)
console.log("Variável" , idade,"é do tipo" , typeof idade)

//Na variável idade não declarar que é Number, ela vai me dizer em typeof 
que é uma string e não um número.

console.log("Olá,",nome,", vocÊ tem",idade,"anos")
console.log('Olá, ${nome}, você tem ${idade}')
console.log("Olá pessoal, meu nome é " + nome + " Eu tenho " + idade)
*/

// Etapa 2

/*const pergunta1 = ("Qual seu nome?")
const resposta1 = prompt(pergunta1)
const pergunta2 = ("Qual cidade você mora?")
const resposta2 = prompt(pergunta2)
const pergunta3 = ("Está gostando?")
const resposta3 = prompt(pergunta3)

console.log(pergunta1, "-" ,resposta1)
console.log(pergunta2, "-" ,resposta2)
console.log(pergunta3, "-" ,resposta3)
*/

const pergunta1 = prompt("Qual seu nome?")
console.log(pergunta1)