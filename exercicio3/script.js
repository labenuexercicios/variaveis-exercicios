// EXERCICIOS 3


// 1) e 2)
const nome = prompt('informe seu nome completo')

const dataNascimento = prompt('digite sua data de nascimento')

let endereço = prompt('endereço residencial')

const cpf = prompt('informe seu cpf')

let escolaridade = prompt('qual sua escolaridade?')

let cnh = confirm('possui cnh?')

let filhos = Number(prompt('quantos filhos possui?'))

let cargo = prompt('cargo atual')

let salario = Number(prompt('salário'))

let comissao = Number(prompt("recebe comissão? se sim, informe a procentagem, caso não, responda com '0'"))

const admissao = Number(prompt('informe o ano de admissão'))


//3) 

console.log('nome', typeof nome)
console.log('data de nascimento', typeof dataNascimento)
console.log('endereço residencial', typeof endereço)
console.log('cpf', typeof cpf)
console.log('escolaridade', typeof escolaridade)
console.log('cnh', typeof cnh)
console.log('filhos', typeof filhos)
console.log('cargo atual', typeof cargo)
console.log('salário', typeof salario)
console.log('recebe comissão?', typeof comissao)
console.log('data de admissão', typeof admissao)


// 4)
console.log('')
console.log('segue abaixo os dados informados')

console.log('nome', nome)
console.log('data de nascimento', dataNascimento)
console.log('encereço residencial', endereço)
console.log('cpf', cpf)
console.log('filhos', filhos)
console.log('cargo atual', cargo)
console.log('salário', salario)
console.log('comissão:', comissao, '%')
console.log('data de admissão', admissao)



