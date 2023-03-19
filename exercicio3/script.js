let nomeCompleto = prompt("Digite seu nome completo")
let dataDeNascimento = Number(prompt("Digite sua data de nascimento"))
let endereço = prompt("Digite seu endereço")
let cpf = Number(prompt("Digite seu CPF"))
let escolaridade = prompt(`Digite seu nivel de escolaridade`)
let cnh = confirm("Digite sua CNH")
let filhos = Number(prompt("Quantos filhos voce possui"))
let cargoAtual = prompt("Qual seu cargo atual")
let salario = Number(prompt("Digite seu salario atual"))
let comissao = Number(prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))
let admissao = Number(prompt("informe o ano de sua adimissao"))

console.log(typeof nomeCompleto,typeof dataDeNascimento,typeof endereço,typeof cpf,typeof cnh,typeof filhos,typeof cargoAtual,typeof salario,typeof comissao,typeof admissao)

//imprima no console um relatorio da pessoa coaboradora.

console.log(`Nome completo: ${nomeCompleto}
Data de nascimento${dataDeNascimento}$
endereço: ${endereço}
CPF ${cpf}
CNH: ${cnh}
Filhos: ${filhos}
Cargo atual ${cargoAtual}
Salario: ${salario}
Comissao: ${comissao}
Admissao: ${admissao}
`)
