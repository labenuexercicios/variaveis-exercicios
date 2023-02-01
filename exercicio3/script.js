let nomeCompleto = prompt("Digite seu nome completo")
let dataDeNascimento = prompt("Digite sua data de nascimento")
let endereço = prompt("Digite seu endereço")
let cpf = prompt("Digite seu CPF")
let cnh = confirm ("Digite sua CNH")
let filhos = Number (prompt("Quantos filhos voce possui"))
let cargoAtual = prompt("Qual seu cargo atual")
let salario = Number (prompt("Digite seu salario atual"))
let comissao = Number (prompt("Digite sua comissao atual"))
let admissao = (prompt("informe o ano de sua adimissao"))

console.log(typeof nomeCompleto,typeof dataDeNascimento,typeof endereço,typeof cpf,typeof cnh,typeof filhos,typeof cargoAtual,typeof salario,typeof comissao,typeof admissao)

//imprima no console um relatorio da pessoa coaboradora.

console.log(`NomeCompleto: ${nomeCompleto}
DataDeNascimento${dataDeNascimento}$
Endereço: ${endereço}
CPF ${cpf}
CNH: ${cnh}
Filhos: ${filhos}
CargoAtual ${cargoAtual}
Salario: ${salario}
Comissao: ${comissao}
Admissao: ${admissao}
`)