const nomeCompleto = prompt("Digite seu nome completo")
const dataNascimento = prompt("Digite sua data de nascimento DD/MM/AAAA")
let endereco = prompt("Digite seu endereço")
const cpf = prompt("Digite seu CPF")
let escolaridade = prompt("Digite sua escolaridade")
let temChn = prompt("Tem carteira de motorista?")
let numFilhos = Number(prompt("Quantos filhos você tem?"))
let cargo = prompt("Qual seu cargo atual?")
let salario = Number(prompt("Qual seu salário atual?"))
let comissao = prompt("Qual o valor da sua comissão?")
let anoAdmissao = Number(prompt("Qual seu ano de admissão"))

console.log(
    typeof nomeCompleto,
    typeof dataNascimento,
    typeof endereco,
    typeof cpf,
    typeof escolaridade,
    typeof temChn,
    typeof numFilhos,
    typeof cargo,
    typeof salario,
    typeof comissao,
    typeof anoAdmissao
)

console.log(
    "\n" + "Nome completo:", nomeCompleto,
    "\n" + "Data de nascimento:", dataNascimento,
    "\n" + "Endereço:", endereco,
    "\n" + "CPF:", cpf,
    "\n" + "Escolaridade:", escolaridade,
    "\n" + "CHN:", temChn,
    "\n" + "Número de filhos", numFilhos,
    "\n" + "Cargo atual", cargo,
    "\n" + "Salário:", salario,
    "\n" + "comissão:", comissao,
    "\n" + "Ano de admissão:", anoAdmissao  
)