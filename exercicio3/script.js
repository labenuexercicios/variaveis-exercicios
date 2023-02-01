let nomeCompleto = prompt('Qual seu nome completo?')
let dataDeNascimento = prompt('Qual sua data de nascimento?')
let endereço = prompt('Qual seu endereço?')
let cpf = Number (prompt('Qual seu CPF?'))
let escolaridade = prompt('Qual seu grau de escolaridade?')
let cnh = confirm('Você tem CNH?')
let filhos = Number (prompt('Quantos filhos você tem?'))
let cargoAtual = prompt('Qual seu cargo atual?')
let salario = Number (prompt('Qual seu salário atual?'))
let comissao = Number (prompt('Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero?'))
let anoAdmissao = Number (prompt('Qual o ano da sua admissão na empresa?'))

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof Endereço, typeof cpf, typeof Escolaridade, typeof cnh, typeof filhos, typeof cargoAtual, typeof salario, typeof comissao, typeof anoAdmissao)

//Imprima no console um relatório da pessoa colaboradora.

console.log(`Nome Completo: ${nomeCompleto}
Data de Nascimento: ${dataDeNascimento}
Endereço: ${endereço}
Seu CPF: ${cpf}
Sua Escolaridade: ${escolaridade}
Tem CNH: ${cnh}
Quantos filhos: ${filhos}
Cargo Atual: ${cargoAtual}
Salário: ${salario}
Recebe comissão: ${comissao}
Ano de Admissão: ${anoAdmissao}
`)