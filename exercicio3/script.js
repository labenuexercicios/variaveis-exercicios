

const nome = prompt ("Nome completo")
console.log ("Nome completo:", nome)

const data = prompt ("Data de nascimento (utilize as / )")
console.log ("Data de nascimento (utilize as / ):", data)

const end = prompt ("Endereço")
console.log ("Endereço:", end)

const cpf = Number (prompt ("CPF"))
console.log ("CPF:", cpf)

const escola = prompt ("Escolaridade")
console.log ("Escolaridade:", escola)

const cnh = confirm('possui cnh? clique em "ok" para sim e "cancel" para não')
console.log ("Possui CNH?:", cnh)

const filhes = Number (prompt ("Quantos filhes possui?:"))
console.log ("Quantos filhes possui?:", filhes)

const cargo = prompt ("Cargo atual:")
console.log ("Cargo atual:", cargo)

const salario = Number (prompt ("Salário:"))
console.log ("Salário:", salario)

const comissao = Number (prompt ("Recebe comissão? se sim , informe a porcentagem, caso não, responda com zero "))
console.log ("Recebe comissão? se sim , informe a porcentagem, caso não, responda com zero :", comissao)

const anoadmissao = prompt ("Informe o ano de admissão")
console.log ("Informe o ano de admissão:", anoadmissao)

// Relatorio 

console.log ("Nome completo:", nome)
console.log ("Data de nascimento:", data)
console.log ("Endereço:", end)
console.log ("CPF:", cpf)
console.log ("Escolaridade:", escola)
console.log ("Possui cnh?:", cnh)
console.log ("Qunatos filhos possuem?:", filhes) 
console.log ("Cargo atual:", cargo)
console.log ("Salario:", salario)
console.log ("Comissão :", comissao)
console.log ("Adimissão :", anoadmissao)



console.log (typeof nome) // string
console.log (typeof data) // string
console.log (typeof end) // string
console.log (typeof cpf) // number
console.log (typeof escola) // string
console.log (typeof cnh) // boolean
console.log (typeof filhes) // number
console.log (typeof cargo) // string
console.log (typeof salario) // number
console.log (typeof comissao) // number
console.log (typeof anoadmissao) // string




