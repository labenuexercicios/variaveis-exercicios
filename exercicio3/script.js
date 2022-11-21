const nome = prompt ("Qual o seu nome?") 
console.log ("Nome", nome)

const diaNascimento = prompt ("Qual a o dia do seu nascimento?")

const mesNascimento = prompt ("Qual a o mês do seu nascimento?")

const anoNascimento = prompt ("Qual a o ano do seu nascimento?")

console.log ("Nascimento", diaNascimento, "/", mesNascimento, "/", anoNascimento)

const endereco = prompt ("Qual o seu endereço?")
console.log ("Endereço:", endereco)

const cpf = prompt ("Qual o seu CPF?")
console.log ("CPF:", cpf)

const escolaridade = prompt ("Qual o sua escolaridade?")
console.log ("Escolaridade:", escolaridade)

const cnh = confirm ("Você possui CNH?")
console.log ("CNH:", cnh)

const filhos = Number(prompt ("Quantos filhos você possui?")) 
console.log ("Filhos:", filhos)

const cargoAtual = prompt ("Qual o seu cargo atual?")
console.log ("Cargo Atual:", cargoAtual)

const salario = Number(prompt ("Qual o seu salário?")) 
console.log ("Salário:", salario)

const comissao = Number(prompt ("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")) 
console.log ("Valor de comissão:", comissao)

const admissao = Number(prompt ("Informe o ano de admissão")) 
console.log ("Data de admissão:", admissao)


console.log ("Tipo de variavel Nome:", typeof nome)
console.log ("Tipo de variavel Dia de Nascimento:", typeof diaNascimento)
console.log ("Tipo de variavel Mês de Nascimento:",typeof mesNascimento)
console.log ("Tipo de variavel Ano de Nascimento:", typeof anoNascimento)
console.log ("Tipo de variavel Endereço:", typeof endereco)
console.log ("Tipo de variavel CPF:", typeof cpf)
console.log ("Tipo de variavel Escolaridade:",typeof escolaridade)
console.log ("Tipo de variavel CNH:", typeof cnh)
console.log ("Tipo de variavel Número de filhos:", typeof filhos)
console.log ("Tipo de variavel Cargo Atual:",typeof cargoAtual)
console.log ("Tipo de variavel Salário:", typeof salario)
console.log ("Tipo de variavel Comissão:", typeof comissao)
console.log ("Tipo de variavel Admissão:", typeof admissao)
