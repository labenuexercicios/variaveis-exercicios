const nomeCompleto = 'Qual é o seu nome completo?'
const rNomeCompleto = prompt(nomeCompleto)
console.log(typeof rNomeCompleto)

const dataDeNascimento = 'Qual a sua data de nascimento? (Utilize as /)'
const rDataDeNacimento = prompt(dataDeNascimento)
console.log(typeof rDataDeNacimento)

const endereco = 'Qual é o seu endereço?'
const rEndereco = prompt(endereco)
console.log(typeof rEndereco)

const cpf = 'Digite seu CPF'
const rCpf = Number(prompt(cpf))
console.log(typeof rCpf)

const escolaridade = 'Qual a sua escolaridade?'
const rEscolaridade = prompt(escolaridade)
console.log(typeof rEscolaridade)

const cnh = 'Possui CNH?'
const rCnh = Boolean(prompt(cnh))
console.log(typeof rCnh)

const filhos = 'Quantos filhos possui?'
const rFilhos = Number(prompt(filhos))
console.log(typeof rFilhos)

const cargoAtual = 'Qual o seu cargo atual?'
const rCargoAtual = prompt(cargoAtual)
console.log(typeof rCargoAtual)

const salario = 'Informe o seu salário'
const rSalario = Number(prompt(salario))
console.log(typeof rSalario)

const comissao =
  'Recebe comissão? Se sim, informe a porcentagem, caso contrário, responda com zero'
const rComissao = prompt(comissao)
console.log(typeof rComissao)

const admissao = 'Informe o ano de sua admissão'
const rAdmissao = Number(prompt(admissao))
console.log(typeof rAdmissao)

console.log(`
${nomeCompleto} - ${rNomeCompleto}
${dataDeNascimento} - ${rDataDeNacimento}
${endereco} - ${rEndereco}
${cpf} - ${rCpf}
${escolaridade} - ${rEscolaridade}
${cnh} - ${rCnh}
${filhos} - ${rFilhos}
${cargoAtual} - ${rCargoAtual}
${salario} - ${rSalario}
${comissao} - ${rComissao}
${admissao} - ${rAdmissao}`)
