const nome = prompt ("Qual é o seu nome completo?")

const data = prompt ("Qual sua data de nascimento?")

const end = prompt ("Qual é o seu endereço?")

let cpf = Number(prompt ("Digite seu cpf"))

const escolaridade = prompt ("Qual é a sua escolaridade?")

const cnh = prompt ("Possui CNH?")

let filhos = Number(prompt ("Quantos filhos tem?"))

const cargo = prompt ("Qual é o seu cargo atual?")

let salario = Number (prompt ("Qual é o seu salário atual?"))

let comissao = Number (prompt ("Recebe comissão? se sim digite a porcentagem, se não digite 0"))

let admissao = Number (prompt ("Informe o ano da sua admissão"))



//let idade = Number(prompt("Qual a sua idade?"))

console.log (typeof nome)
console.log (typeof data)
console.log (typeof end)
console.log (typeof cpf)
console.log (typeof escolaridade)
console.log (typeof cnh)
console.log (typeof filhos)
console.log (typeof cargo)
console.log (typeof salario)
console.log (typeof comissao)
console.log (typeof admissao)


console.log("Segue abaixo o Formulário respondido")
console.log ("Seu nome é ", nome)
console.log ("Sua data de nascimento é ", data)
console.log ("Seu endereço é ", end)
console.log ("O número do seu cpf é ", cpf)
console.log ("Sua escolaridade é ", escolaridade)
console.log ("Você possui cnh? ", cnh)
console.log ("Você tem ", filhos ,"filho(s)")
console.log ("Você trabalha atualmente como ", cargo)
console.log ("Seu salário é ", salario , "reais")
console.log ("Você recebe comissão?", comissao)
console.log ("O ano de sua admissão foi ", admissao)