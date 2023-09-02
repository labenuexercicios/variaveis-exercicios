// Relatório do pessoal

const nomeCompleto = prompt('Nome Completo:')
const dataDeNascimento = prompt('Data de Nascimento: (Utiliza as /)')
let endereço = prompt('Endereço:')
const cpf = Number(prompt('CPF:'))
let escolaridade = prompt('Escolaridade:')
let cnh = confirm(prompt('Possui CNH?'))
let filhos = Number(prompt('Quantos filhos possui?'))
let cargo = prompt('Cargo:')
let salario = Number(prompt('Salário:'))
let comissao = Number(prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero'))
const admissao = Number(prompt('Informe ano de admissão:'))

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereço, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargo, typeof salario, typeof comissao, typeof admissao)
console.log(nomeCompleto, dataDeNascimento, endereço, cpf, escolaridade, cnh, filhos, cargo, salario, comissao, admissao)

