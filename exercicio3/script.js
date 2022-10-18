confirm ("Seja bem vindo A EnterPrise RH")

confirm ("Agora vamos coletar alguns dos seus dados!")
confirm("Nos proximos blocos insira os dados que forem pedidos a voce!")

const nome=prompt("Nome completo ?","Digite aqui") 
const dtNasc=prompt("Data de nascimento ?","Separe com /")
const end=prompt("Qual seu endereço?", "Digite aqui")
const cpf=prompt("Qual seu CPF","Digite aqui")
const ensino=prompt("Qual seu nivel de escolaridade","Digite aqui")
const cnh=confirm("Possui CNH? Se sim aperte sim, se nao aperte cancelar")
const filho=Number(confirm(prompt("Possui filhos se nao aperte cancelar, se sim digite quantos")))
const cargo=prompt("Qual seu cargo atual ?","Digite aqui")
const salario=Number(prompt("Qual seu salario atual?","Digite aqui"))
const cms=(prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))
const anoAdm=Number(prompt("Informe o ano de admissão","Digite aqui"))

console.log(typeof nome)
console.log(typeof dtNasc) 
console.log(typeof end)
console.log(typeof cpf)
console.log(typeof ensino)
console.log(typeof cnh)
console.log(typeof filho)
console.log(typeof cargo)
console.log(typeof salario)
console.log(typeof cms)
console.log(typeof anoAdm)

console.log(`################Formulario#############################
Nome completo:${nome}
Data de Nascimento:${dtNasc}
Endereçõ:${end}
CPF:${cpf}
Nivel Escolaridade: ${ensino}
Possui CNH:${cnh}
Tem filhos, se sim quantos:${filho}
Cargo atual:${cargo}
Salario atual:R$ ${salario},00
Recebe comissão? Se sim, informe a %, caso não, responda com 0: ${cms}%
Informe o ano de admissão:${anoAdm}
##################################Formulario######################`)
