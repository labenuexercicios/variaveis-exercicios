let fullName = prompt(`Nome completo:`)
const BIRTH_DATE = prompt(`Data de nascimento:`) // Verificar como converter para Date
let address = prompt(`Endereço:`)
const CPF = Number(prompt(`CPF:`))
let scholarity = prompt(`Escolaridade:`)
let cnh = prompt(`Possui CNH?`)
let children = Number(prompt(`Quantos filhos possui?`))
let jobRole = prompt(`Cargo atual:`)
let wage = Number(prompt(`Salário:`))
let yearOfAdmission = Number(prompt(`Informe o ano de admissão:`))
let commission = Number(
  prompt(
    `Recebe comissão? Se sim, informe a porcentagem; caso não, responda com zero.`
  )
)

console.log(`
  RELATÓRIO DO FUNCIONÁRIO\n
  Nome completo: ${fullName}
  Data de nascimento: ${BIRTH_DATE}
  Endereço: ${address}
  CPF: ${CPF}
  Escolaridade: ${scholarity}
  Possui CNH? ${cnh}
  Quantos filhos possui? ${children}
  Cargo atual: ${jobRole}
  Salário: ${wage}
  Comissão: ${commission}
  `)

console.log(`O tipo da variável fullName é: ${typeof fullName}`)
console.log(`O tipo da variável BIRTH_DATE é: ${typeof BIRTH_DATE}`)
console.log(`O tipo da variável address é: ${typeof address}`)
console.log(`O tipo da variável CPF é: ${typeof CPF}`)
console.log(`O tipo da variável scholarity é: ${typeof scholarity}`)
console.log(`O tipo da variável cnh é: ${typeof cnh}`)
console.log(`O tipo da variável children é: ${typeof children}`)
console.log(`O tipo da variável jobRole é: ${typeof jobRole}`)
console.log(`O tipo da variável wage é: ${typeof wage}`)
console.log(`O tipo da variável commission é: ${typeof commission}`)
console.log(`O tipo da variável yearOfAdmission é: ${typeof yearOfAdmission}`)
