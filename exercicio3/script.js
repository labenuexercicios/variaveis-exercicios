//Sistema de RH

const nome = prompt("Digite o seu nome completo:")

const dataNascimento = prompt("Digite a data do seu nascimento no formado dd/mm/aaaa:")

const endereco = prompt("Digite o seu endereço:")

const cpf = Number(prompt("Digite o seu CPF:"))

const escolaridade = prompt("Digite o seu grau de escolaridade:")

const cnh = "Você possui CNH?"
const cnhCheck = confirm(cnh)

const filhos = Number(prompt("Quantos filhos você tem?Caso nenhum, coloque 0"))

const cargoAtual = prompt("Qual o seu cargo atual?")

const salario = Number(prompt("Qual o seu salario?"))

const comissao = Number(prompt("Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))


const anoAdmissao = prompt("Informe o seu ano de admissão:")


console.log(typeof nome)
console.log(typeof dataNascimento)
console.log(typeof endereco)
console.log(typeof cpf)
console.log(typeof escolaridade)
console.log(typeof cnh)
console.log(typeof filhos)
console.log(typeof cargoAtual)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof anoAdmissao)
console.log("\n")
console.log("\n")

console.log("RELATÓRIO DO COLABORADOR")

console.log("Colaborador:", nome)
console.log("\n")
console.log("Data de nascimento:", dataNascimento)
console.log("\n")
console.log("Endereço:", endereco)
console.log("\n")
console.log("CPF:", cpf)
console.log("\n")
console.log("Escolaridade:", escolaridade)
console.log("\n")
console.log("Possui CNH:",  cnhCheck)
console.log("\n")
console.log("Quantidade de filhos:", filhos)
console.log("\n")
console.log("Cargo atual:", cargoAtual)
console.log("\n")
console.log("Salario:", salario)
console.log("\n")
console.log("Porcentagem de comissão:", comissao)
console.log("\n")
console.log("Ano de admissão:", anoAdmissao)












