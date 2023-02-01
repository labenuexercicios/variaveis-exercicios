let nomeCompleto = prompt('Digite seu nome completo:')
let dataDeNascimento = prompt('Digite sua data de nascimento')
let endereço = prompt('Digite seu endereço:')
let cpf = prompt('Digite seu cpf:')
let escolaridade = prompt('Digite sua escolaridade')
let cnh = confirm ('Você possui CNH ? ')
let filhos = Number (prompt ('Quantos filhos você possui ?'))
let cargoAtual = prompt('Digite seu cargo atual:')
let salario = Number (prompt('Digite seu salário atual:'))
let comissao = Number (prompt('Você recebe comissão ? Se sim, informe a porcentagem, caso não, responda com zero'))
let admissao = prompt('Informe o ano de admissão:')

console.log(typeof nomeCompleto ,typeof dataDeNascimento,typeof endereço, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargoAtual, typeof salario, typeof comissao, typeof admissao )

console.log(`NomeCompleto: ${nomeCompleto} 
DataDeNascimento: ${dataDeNascimento}
Endereço: ${endereço}
Cpf: ${cpf}
Escolaridade: ${escolaridade}
CNH: ${cnh}
Filhos: ${filhos}
CargoAtual: ${cargoAtual}
Salário: ${salario}
Comissão: ${comissao}
Admissão: ${admissao}`)














