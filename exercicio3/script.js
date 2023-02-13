let nomeCompleto = "Nome completo"
let respNomeCompleto = prompt(nomeCompleto)

let dataNascimento = "Data de nascimento"
let respDataNascimento = Number((prompt(dataNascimento)))

let endereco = "Endereço"
let respEndereco = prompt(endereco)

let cpf = "CPF"
let respCpf = Number(prompt(cpf))

let escolaridade = "Escolaridade"
let respEscolaridade = prompt(escolaridade)

let cnh = "Tem CNH?"
let respCnh = Boolean(prompt(cnh))

let filhos = "Quantos filhos?"
let respFilhos = Number(prompt(filhos))

let cargo = "Cargo atual"
let respCargo = prompt(cargo)

let salario = "Salário"
let respSalario = Number(prompt(salario))

let comissao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"
let respComissao = Number(prompt(comissao))

let admissao = "ano de admissão"
let respAdmissao = Number(prompt(admissao))

console.log("tipo do nome: " + typeof respNomeCompleto)
console.log("tipo da data de nascimento: " + typeof respDataNascimento)
console.log("tipo do endereço: " + typeof respEndereco)
console.log(" tipo do cpf: " + typeof respCpf)
console.log("tipo da escolaridade: " + typeof respEscolaridade)
console.log("tpo da CNH: " + typeof respCnh)
console.log("tipo do filhos: " + typeof respFilhos)
console.log("tipo de cargo: " + typeof respCargo)
console.log("tipo do salario: " + typeof respSalario)
console.log("tipo da comissão:  " + typeof respComissao)
console.log("tipo da admissão: " + typeof respAdmissao)

console.log(`
Nome completo: ${respNomeCompleto}
Data de nascimento: ${respDataNascimento}
CPF: ${respCpf}
Escolaridade: ${respEscolaridade}
CNH: ${respCnh}
Quantos filhos: ${respFilhos}
Cargo atual: ${respCargo}
Salário: ${respSalario}
Comissão: ${respComissao}
Ano de admissão: ${respAdmissao}
`)