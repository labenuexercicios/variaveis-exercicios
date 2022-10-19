const QUESTION_NAME = 'Nome completo:'
const QUESTION_BIRTH_DATE = 'Data de nascimento:'
const QUESTION_ADDRESS = 'Endereço:'
const QUESTION_CPF = 'CPF:'
const QUESTION_SCHOLARITY = 'Escolaridade:'
const QUESTION_CNH = 'Possuir CNH?'
const QUESTION_CHILDREN = 'Quantos filhos possui?'
const QUESTION_JOB_ROLE = 'Cargo atual:'
const QUESTION_WAGE = 'Salário:'
const QUESTION_YEAR_OF_ADMISSION = 'Informe o ano de admissão:'
const QUESTION_COMMISSION =
  'Recebe comissão? Se sim, informe a porcentagem; caso não, responda com zero.'

const FULL_NAME = prompt(QUESTION_NAME)
const BIRTH_DATE = prompt(QUESTION_BIRTH_DATE) // Verificar como converter para Date
const CPF = Number(prompt(QUESTION_CPF))
let address = prompt(QUESTION_ADDRESS)
let scholarity = prompt(QUESTION_SCHOLARITY)
let cnh = prompt(QUESTION_CNH)
let children = Number(prompt(QUESTION_CHILDREN))
let jobRole = prompt(QUESTION_JOB_ROLE)
let wage = Number(prompt(QUESTION_WAGE))
let yearOfAdmission = Number(prompt(QUESTION_YEAR_OF_ADMISSION))
let commission = Number(prompt(QUESTION_COMMISSION))

console.log(`
    RELATÓRIO DO FUNCIONÁRIO\n
    Nome completo: ${FULL_NAME}
    Data de nascimento: ${BIRTH_DATE}   
    CPF: ${CPF}
    Endereço: ${address}
    Escolaridade: ${scholarity}
    Possui CNH? ${cnh}
    Quantos filhos possui? ${children}
    Cargo atual: ${jobRole}
    Salário: ${wage}
    Comissão: ${commission}
  `)

console.log(`O tipo da variável FULL_NAME é: ${typeof FULL_NAME}`)
console.log(`O tipo da variável BIRTH_DATE é: ${typeof BIRTH_DATE}`)
console.log(`O tipo da variável CPF é: ${typeof CPF}`)
console.log(`O tipo da variável address é: ${typeof address}`)
console.log(`O tipo da variável scholarity é: ${typeof scholarity}`)
console.log(`O tipo da variável cnh é: ${typeof cnh}`)
console.log(`O tipo da variável children é: ${typeof children}`)
console.log(`O tipo da variável jobRole é: ${typeof jobRole}`)
console.log(`O tipo da variável wage é: ${typeof wage}`)
console.log(`O tipo da variável commission é: ${typeof commission}`)
console.log(`O tipo da variável yearOfAdmission é: ${typeof yearOfAdmission}`)
