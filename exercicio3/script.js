// EXERCICIO 3 

const nomeCompleto = prompt("Digite seu nome completo")
const dataDeNascimento = prompt("Data de Nascimento")
let endereco = prompt("Endereço")
const cpf = Number(prompt("CPF"))
let escolaridade = prompt("Qual seu grau de escolaridade?")
const possuiCarteiraDeHabilitacao = confirm("possui CNH?")
let possuiFilhos = Number(prompt("Quantos filhos possui? se sim, quantos?"))
let cargoAtual = prompt("Cargo Atual")
let salario = Number(prompt("Salário"))
let comissao = Number(prompt("Recebe comissão? se sim, informar porcentagem. se não, responder com zero"))
const anoAdmissao = Number(prompt("Qual o ano da Admissão?"))

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereco, typeof cpf, typeof escolaridade, 
    typeof possuiCarteiraDeHabilitacao, typeof possuiFilhos, typeof cargoAtual, typeof salario,
    typeof comissao, typeof anoAdmissao)

console.log(`nomeCompleto: ${nomeCompleto}
dataDeNacimento: ${dataDeNascimento}
endereço: ${endereco}
CPF: ${cpf}
escolaridade: ${escolaridade}
CNH: ${possuiCarteiraDeHabilitacao}
Filhos: ${possuiFilhos}
CargoAtual: ${cargoAtual}
Salario: ${salario}
Comissão: ${comissao}
Ano Admissão: ${anoAdmissao}`)