//PARTE 01
//a
let nome

//b
let idade

//c
console.log(typeof nome)

console.log(typeof idade)
//d
//Imprimiu undefined porque não foi atribuído nenhum valor

//e
let nomeUsuario = prompt("Qual o seu nome?")
nome = nomeUsuario;

let idadeUsuario = prompt("Qual a sua idade?")
idade = idadeUsuario

console.log(typeof nome)
console.log(typeof idade)

//f
// Imprimiu strings para os dois resultados

//g
console.log("Olá,", nome,"você tem", idade, "anos.")


//PARTE 02

let pergunta1 = prompt("Você tem celular?")
let pergunta2 = prompt("Qual gosta de chocolate?")
let pergunta3 = prompt("Você tem pet?")

console.log(pergunta1)
console.log(pergunta2)
console.log(pergunta3)

const texto1 = "Você tem celular?"
const texto2 = "Vocêjoao gosta de chocolate?"
const texto3 = "Você tem pet?"

console.log(texto1,"-",pergunta1)
console.log(texto2,"-",pergunta2)
console.log(texto3,"-",pergunta3)
