//Exercicio 1

let nome
let idade

console.log(typeof nome, typeof idade)
//Foi imprimido tipo undefined porque nao tem nada atribuido as variaveis.

nome = prompt("Digite seu nome")
idade = Number(prompt("Digite sua idade"))

//Foi imprimido o mesmo tipo de antes, porque fiz a alteração do numero de string para numero ja.
console.log("Olá", nome, "você tem", idade, "anos")

let boolean1 = prompt("Qual a sua altura?")
let boolean2 = prompt("Qual o seu peso?")
let boolean3 = prompt("É alergo a algum medicamento?")

console.log(boolean1, boolean2, boolean3)

let text1 = "Qual a sua altura?"
boolean1 = prompt(text1)
console.log("-",text1,"->", boolean1)

let text2 = "Qual o seu peso?"
boolean2 = prompt(text2)
console.log("-",text2, "->", boolean2)

let text3 = "É alergo a algum medicamento?"
boolean3 = prompt(text3)
console.log("-",text3, "->", boolean3)