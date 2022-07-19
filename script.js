// Ex 1

let name
let idade
console.log(typeof name, typeof idade)

// Como o 'vazio' está entre aspas, o valor de string (de texto) foi impresso.

name = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof name, typeof idade)

console.log('Olá', name, 'você tem', idade, 'anos')

// Ex 2

const pressao_P = prompt("Você tem pressão alta?");
const pressao_R = prompt(pressao_P)
const pressao_PR = prompt("Você tem pressão alta? -", pressao_R);
var mais30_P = prompt("Você tem mais de 30 anos?");
var mais30_R = prompt(mais30_P);
var mais30_PR = prompt("Você tem mais de 30 anos? -", mais30_R);
let cirurgia_P = prompt("Você já fez alguma cirurgia?");
let cirurgia_R = prompt(cirurgia_P);
let cirurgia_PR = prompt("Você já fez alguma cirurgia? -", cirurgia_R);

// Ex 3

var a = 10;
var b = 25;
var c = a;
var a = b;
var c = b;