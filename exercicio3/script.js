const nomeCompleto = "Digite seu nome completo"
const dataDeNasc = "Digite sua data de nascimento exemplo dd/mm/AAAA"
const emderecoFunc = "Digite seu endereço"
const cpfFunc = "Digite seu CPF"
const escolaridadeFunc = "Digite sua escolaridade "
const temCnh = "Possui CNH?"
const filhos = "Quantos filhos você tem?"
const cargoAtual = "Qual seu Cargo atual?"
const salario = "Qual seu salário atual?"
const comissao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com 0"
const anoAdmissao = "Informe o ano de admissão"


let nomeR = prompt(nomeCompleto)
let dataR = prompt(dataDeNasc)
let enderecoR = prompt(emderecoFunc)
let cpfR = Number(prompt(cpfFunc))
let escolaridadeR = prompt(escolaridadeFunc)
let cnhR = prompt(temCnh)
let filhoR = Number(prompt(filhos))
let cargoR = prompt(cargoAtual)
let salarioR = Number(prompt(salario))
let comissaoR = Number(prompt(comissao,))
let admissaoR = Number(prompt(anoAdmissao))

console.log ("Funcionario se chama:",nomeR)
console.log ("Sua data de nascimento é:",dataR)
console.log ("Seu endereço é:",enderecoR)
console.log ("CPF:",cpfR)
console.log ("Nível de escolarizaçõa:",escolaridadeR)
console.log ("CNH:",cnhR)
console.log ("Quantidade de filhos:",filhoR)
console.log ("Cargo atual:",cargoR)
console.log ("Salário: R$",salarioR)
console.log ("Comissão:",comissaoR,"%")
console.log ("Data de admissão:",admissaoR)

console.log (typeof nomeR)
console.log (typeof dataR)
console.log (typeof enderecoR)
console.log (typeof cpfR)
console.log (typeof escolaridadeR)
console.log (typeof cnhR)
console.log (typeof filhoR)
console.log (typeof cargoR)
console.log (typeof salarioR)
console.log (typeof comissaoR)
console.log (typeof admissaoR)
