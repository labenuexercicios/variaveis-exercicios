let nome 
let idade 

console.log (typeof(nome), typeof idade)
/* Retornou undefinied, pois as variaveis nao tem valor definido */

nome = (prompt("Qual é o seu nome?"))
idade = Number(prompt("Qual é a sua idade?"))
console.log (typeof(nome), typeof idade)


let touca = prompt("usa touca?")
let meia = prompt("Voce possui meia furada?")
let comida = prompt("Voce gosta de lasanha?")


let resposta = prompt(touca, meia, comida)

let respostaA = prompt(touca)
let respostaB = prompt(meia)
let respostaC = prompt(comida)

console.log (respostaA, respostaB, respostaC)
console.log(`
${touca} - ${respostaA}
${touca} - ${respostaB}
${touca} - ${respostaC}
`)

