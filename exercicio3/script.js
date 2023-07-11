const pergunta1 = "Qual seu nome?"
const pergunta2 = "Qual sua data de nascimento??"
const pergunta3 = "Qual seu endereço?"
const pergunta4 = "Qual seu CPF?"
const pergunta5 = "Qual sua escolaridade??"
const pergunta6 = "Possui CNH?"
const pergunta7 = "Quantos filhos possui?"
const pergunta8 = "Qual sueu cargo atual??"
const pergunta9 = "Pretensão salarial?"
const pergunta10 = "Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel"
const pergunta11= "Qual ano de admissão??"


////////////

const userName = prompt(pergunta1)

console.log(userName)

console.log(typeof userName)

//////////

const nasc = prompt(pergunta2)

console.log(nasc)

console.log(typeof nasc)

////////////////

let endereco = prompt(pergunta3)

console.log(endereco)

console.log(typeof endereco)

////////////

const cpf = prompt(pergunta4)

console.log(cpf)

console.log(typeof cpf)

//////////

let escolaridade = prompt(pergunta5)

console.log(escolaridade)

console.log(typeof escolaridade)

////////////////

let CNH = confirm(pergunta6)

console.log(CNH)

console.log(typeof CNH)

////////////

let filhos = prompt(pergunta7)

console.log(filhos)

console.log(typeof filhos)

//////////

let cargo = prompt(pergunta8)

console.log(cargo)

console.log(typeof cargo)

////////////////

let salario = Number (prompt(pergunta9))

console.log(salario)

console.log(typeof salario)

////////////

let comissao = Number (confirm(pergunta10))

console.log("Recebe comissão?",comissao)

console.log(typeof comissao)

//////////

let anoAdmissao = Number (prompt(pergunta11))

console.log(anoAdmissao)

console.log(typeof anoAdmissao)


//4) Imprima no console um relatório da pessoa colaboradora.

console.log("Olá ", userName,".Segue dados coletados:","Nome ", userName,", Nascimento", nasc," endereço ", endereco,", CPF ",cpf,", escolaridade ",escolaridade,"Tem CNH?", CNH," tem filhos ?", filhos,"cargo atual: ",cargo,"salario atual: ",salario)