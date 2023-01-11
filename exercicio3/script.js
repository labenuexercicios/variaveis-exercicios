const nomeCompleto = prompt("digite o seu nome:")
const dataNasc = prompt ("digite sua data de nascimento:")
let endereco = prompt ("digite seu endereço")
const cpf = Number (prompt("digite seu cpf (somente númetos)"))

let escolaridade = prompt("digite sua escolaridade")
let cnh = prompt("possui cnh")
let qntfilhos = Number (prompt(" possui quantos filhos?"))
let cargoAtual = prompt ("qual seu cargo atual?")
let salario = Number(prompt("qual seu salario:"))
let comissão = Number(prompt("qual sua comissão?:"))
let anodeadmissão = Number(prompt("informe o ano de admissão"))

console.log(
    "tpos de variaveis:" +
    "\nNome completo:", typeof(nomeCompleto) +
    "\ndata de nascimento:", typeof(dataNasc) +
    "\nendereço:", typeof(endereco) +
    "\ncpf", typeof(cpf)+
    "\nEscolaridade:", typeof(escolaridade) +
    "\nCnh", typeof(cnh) + 
    "\nQuantidadedefilhos", typeof(qntfilhos)+
    "\nCargoatual:", typeof (cargoAtual)+
    "\nSalario", typeof (salario)+
    "\nComissão:", typeof(comissão)+
    "\nAno de admissão", typeof(anodeadmissão)

)


console.log(
"relatorio do funcionario"+
"\nNome completo:", nomeCompleto +
"\ndata de nascimento:",dataNasc +
"\nendereço:", endereco +
"\ncpf", cpf+
"\nEscolaridade:", escolaridade +
"\nCnh", cnh + 
"\nQuantidadedefilhos",qntfilhos+
"\nCargoatual:", cargoAtual+
"\nSalario", salario+
"\nComissão:", comissão+
"\nAno de admissão", anodeadmissão


)
