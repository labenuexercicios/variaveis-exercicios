const nomeCompleto = prompt(`Qual o seu nome completo? `)
const dataNascimento = Number (prompt(`Qual sua data de nascimento? `))
let endereço = prompt (`Qual o seu endereço? `)
let escolaridade = prompt (`Qual o seu nivel escolar? `)
const cnh = confirm ('Você possui CNH? ')
let filhos = Number (prompt ('Você possui quantos filhos? '))
const cargo = prompt('Qual o seu cargo atual? ')
const salario = Number(prompt('Quantos você recebe de salario? '))
const comissao = prompt ('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero') 
const anoAdmissao = prompt('Informe o ano de sua admissão.')

console.log(typeof nomeCompleto)
console.log(typeof dataNascimento)
console.log(typeof endereço)
console.log(typeof escolaridade)
console.log(typeof cnh)
console.log(typeof filhos)
console.log(typeof cargo)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof anoAdmissao)

console.log(`Relatório de RH:
Nome do funcionario: ${nomeCompleto}
Data de nascimento: ${dataNascimento}
Endereço: ${endereço}
Escolaridade: ${escolaridade}
Possui CNH: ${cnh}
Possui: ${filhos} filhos
Possui o cargo: ${cargo}
Recebe: ${salario} salario
Recebe comissão de: ${comissao}
Foi adimitido no ano de: ${anoAdmissao}`)

