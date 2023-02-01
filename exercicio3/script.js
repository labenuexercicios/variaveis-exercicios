//Variáveis

const nome = ("Nome Completo:")
const nome1 = prompt(nome)
const data = ("Data de nascimento:")
const data1 = prompt(data)
const endereco = ("Endereço:")
const endereco1 = prompt(endereco)
const cpf = ("CPF")
const cpf1 = Number(prompt(cpf))
const escolaridade = ("Escolaridade:")
const escolaridade1 = prompt(escolaridade)
const cnh = ("Possui CNH?")
const cnh1 = Boolean(prompt(cnh))
const filho = ("Quantos filhos possui?")
const filho1 = prompt(filho)
const cargo = ("Cargo atual:")
const cargo1 = prompt(cargo)
const salario = ("Salário:")
const salario1 = Number(prompt(salario))
const comissao = ("Recebe comissão? Se sim, informe a porcentgem, caso não, responda com zero.")
const comissao1 = prompt(comissao)
const admissao = ("Informe o ano de admissão:")
const admissao1 = prompt(admissao)

// Console.Log
console.log(nome1, "é do tipo:" , typeof nome1)
console.log(data1, "é do tipo:" , typeof data1)
console.log(endereco1, "é do tipo:" , typeof endereco1)
console.log(cpf1, "é do tipo:", typeof cpf1)
console.log(escolaridade1, "é do tipo:", typeof escolaridade1)
console.log(cnh1, "é do tipo:", typeof cnh1)
console.log(filho1, "é do tipo:", typeof filho1)
console.log(salario1, "é do tipo:", typeof salario1)
console.log(comissao1, "é do tipo:", typeof comissao1)
console.log(admissao1, "é do tipo:", typeof admissao)
console.log("Nome completo:" , nome1,
"Data de nascimento:" , data1,
"Endereço:", endereco1,
"CPF:", cpf1,
"Escolaridade:" , escolaridade1,
"Possui CHN", cnh1,
"Quantos filhes possui?" , filho1,
"Cargo atual:" , cargo1,
"Salário:" ,salario1,
"Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero", comissao1,
"Informe o ano de admissão" ,admissao1,)