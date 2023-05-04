let nome = "Digite o seu nome: "
const nascimento = "Data de nascimento: "
let endereco = "Seu endereço: "
const cpf = "Seu CPF: "
let escolaridade = "Sua escolaridade: "
let cnh = "Possui CNH? "
let quantidadeFilhos = "Quantos filhos possui? "
let cargo = "Cargo atual? "
let salario = "Seu salário? "
let recebeSalario = "Recebe salário? Se sim, aperte em confirme, caso não, aperte cancel"
const admissao = "Informe o ano de admissão"

const respostaA = prompt(nome)
const respostaB = (prompt(nascimento))
const respostaC = prompt(endereco)
const respostaD = Number(prompt(cpf))
const respostaE = prompt(escolaridade)
const respostaF = prompt(cnh)
const respostaG = Number(prompt(quantidadeFilhos))
const respostaH = prompt(cargo)
const respostaI = Number(prompt(salario))
const respostaJ = confirm(recebeSalario)
const respostaK = prompt(admissao)

console.log(typeof respostaA, typeof respostaB, typeof respostaC, typeof respostaD, typeof respostaE, typeof respostaF, typeof respostaG, typeof respostaH, typeof respostaI, typeof respostaJ, typeof respostaK)


console.log(nome, respostaA)
console.log(nascimento, respostaB)
console.log(endereco, respostaC)
console.log(cpf, respostaD)
console.log(escolaridade, respostaE)
console.log(cnh, respostaF)
console.log(quantidadeFilhos, respostaG)
console.log(cargo, respostaH)
console.log(salario, respostaI)
console.log(recebeSalario, respostaJ)
console.log(admissao, respostaK)
