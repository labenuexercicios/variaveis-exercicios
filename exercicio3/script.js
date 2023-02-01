const nome       = prompt("qual seu nome?")
const nascimento = Number(prompt("qual sua data de nacimento? xx/xx/xx"))
let endereço     = prompt("qual seu endereço?")
const CPF        = Number(prompt("qual seu cpf"))
let escolaridade = prompt("qual sua escolaridade?")
const CNH        = Boolean(prompt("você tem CNH?"))
let filhos       = Number(prompt("quantos filhos vc tem?"))
let cargo        = prompt("qual seu cargo atual?")
let salario      = Number(prompt("qual seu salario?"))
let comissão     = Number(prompt("vc recebe comissão se sim qual a porcentagem se não responda zero ? "))
const admissão   = Number(prompt("informe o ano de admissão "))

console.log("tipo do nome " + typeof nome)
console.log("tipo da data de nascimento " + typeof nascimento)
console.log("tipo do endereço " + typeof endereço)
console.log(" tipo do cpf " + typeof CPF)
console.log("tipo da escolaridade " + typeof escolaridade)
console.log("tpo da CNH " + typeof CNH)
console.log("tipo do filhos " + typeof filhos)
console.log("tipo de cargo " + typeof cargo)
console.log("tipo do salario " + typeof salario)
console.log("tipo da comissão  " + typeof comissão)
console.log("tipo da admissão " + typeof admissão)


console.log("nome ",nome, "\n" , "data de nascimento: " ,nascimento,"\n" , "qual seu endereço: ", endereço, "\n", "qual seu cpf: ",CPF, "\n", "qual sua escolaridade: ",escolaridade, 
"\n" , "você tem CNH: ", CNH, "\n", "tem filhos: ", filhos, "\n", "seu cargo:" , cargo, "\n", "qual seu salario: " ,salario, "\n" , "recebe comissão:" ,comissão, 
"\n" , "ano de adimissão: " ,admissão,)  