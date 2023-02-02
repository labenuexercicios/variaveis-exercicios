const nomeCompleto = 'Nome Completo'
const rNomeCompleto = prompt(nomeCompleto)
console.log(typeof rNomeCompleto)

const dataDeNascimento = 'Data de nascimento. Utilize /'
const rDatadeNascimento = prompt(dataDeNascimento)
console.log(typeof rDataDeNascimento) 

const endereco = 'Endereço'
const rEndereco = prompt(endereco)
console.log(typeof rEndereco)

const CPF = 'Digite seu CPF'
const rCPF = Number(prompt(CPF))
console.log(typeof rCPF)

const escolaridade = 'Escolaridade'
const rEscolaridade = prompt(escolaridade)
console.log(typeof rEscolaridade)

const CNH = 'Possui CNH?'
const rCNH = prompt(CNH)
console.log(typeof rCNH)

const filhos = 'Quantos filhos possui?'
const rFilhos = Number(prompt(filhos))
console.log(typeof rFilhos)

const cargoAtual = 'Cargo atual'
const rCargoAtual = prompt(cargoAtual)
console.log(typeof rCargoAtual)

const salario = 'Salário'
const rSalario = Number(prompt(salario))
console.log(typeof rSalario)

const admissao = 'Ano de admissão'
const rAdmissao = Number(prompt(admissao))
console.log(typeof rAdmissao)

console.log(
    ${`nomeCompleto`} - ${`rNomeCompleto`}
    ${`dataDeNascimento`} - ${`rDataDeNascimento`}
    ${`endereco`} - ${`rEndereco`}
    ${`CPF`} - ${`rCPF`}
    ${`escolaridade`} - ${`rEscolaridade`}
    ${`CNH`} - ${`rCNH`}
    ${`filhos`} - ${`rFilhos`}
    ${`cargoAtual`} - ${`rCargoAtual`}
    ${`salario`} - ${`rSalario`}
    ${`admissao`} - ${`rAdmissao`}
)


