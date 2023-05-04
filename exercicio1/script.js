// declarar uma variavel para armazenar no e uma para armazenar idade sem valores

//let nome1
//let idade1
//console.log(typeof nome1, "e", typeof idade1)

// apareceu undefined para as duas variáveis
// apareceu undefined por não ter atrbuído valores

let nome1 = prompt("Qual é o seu nome?")
let idade1 = Number(prompt("Qual a sua idade?"))

console.log(typeof nome1, "e", typeof idade1)

//apareceu uma string e um number

console.log("Olá,", nome1, "você tem", idade1, "anos!")

//após digitar console.log acima apareceu a frase "Olá, Camila você tem 40 anos!"
