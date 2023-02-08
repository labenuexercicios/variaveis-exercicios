// EXERCICIO 03

const nome = prompt('Qual é o teu nome?')
const nasc = prompt('Sua data de Nascimento?')
let ender = prompt('Qual seu endereço?')
const cpf = prompt('Qual teu cpf? sem pontuação')
let escol = prompt('Sua escolaridade?')
let cnh = prompt('Possui cnh? Sim ou Não?')
let filiacao = prompt('Tem filhos? quantos?')
let cargo = prompt('Qual teu cargo atual?')
let salary = prompt('Qual teu salário?')
let comissao = prompt('Recebe Comissão? Se sim, escreva a porcentagem. Se não, preencha com 0')
const ano = prompt('Qual o ano de sua admissão?')

// UTILIZANDO O CASTING PRA TRANSFORMAR STRING EM NUMERO 
const cpfNumero = Number(cpf)
const salaryNumero = Number(salary)
const comissaoNumero = Number(comissao)
const anoNumero = Number(ano)

console.log(typeof nome, nome) 
console.log(typeof nasc, nasc)
console.log(typeof ender, ender)
console.log(typeof cpf, cpf)
console.log(typeof escol, escol)
console.log(typeof cnh, cnh)
console.log(typeof filiacao, filiacao)
console.log(typeof cargo, cargo)
console.log(typeof salary, salary)
console.log(typeof comissao, comissao)
console.log(typeof ano, ano)

console.log('\napós a transformação\n')

console.log(typeof cpfNumero, cpfNumero)
console.log(typeof salaryNumero, salaryNumero)
console.log(typeof comissaoNumero, comissaoNumero)
console.log(typeof anoNumero, anoNumero)

