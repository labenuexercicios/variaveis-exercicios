const nome = ("Nome Completo:")
const resp1 = prompt (nome)
console.log(nome, resp1)
console.log(typeof resp1)

const dn = ("Data de Nascimento:")
const resp2 = prompt (dn)
console.log(dn, resp2)
console.log(typeof resp2)

const endereço = ("Endereço:")
const resp3 = prompt (endereço)
console.log(endereço, resp3)
console.log(typeof endereço)

const cpf = ("CPF:")
const resp4 = Number(prompt (cpf))
console.log(cpf, resp4)
console.log(typeof resp4)

const esc = ("Escolaridade:")
const resp5 = prompt (esc)
console.log(esc, resp5)
console.log(typeof resp5)

const cnh = ("CNH:")
const resp6 = Number(prompt (cnh))
console.log(cnh, resp6)
console.log(typeof resp6)

const filhos = ("Quantos filhos possui?")
const resp7 = Number(prompt (filhos))
console.log(filhos, resp7)
console.log(typeof resp7)

const cargo = ("Cargo atual:")
const resp8 = prompt (cargo)
console.log(cargo, resp8)
console.log(typeof resp8)

const salario = ("Salario")
const resp9 = Number(prompt (salario))
console.log(salario, resp9)
console.log(typeof resp9)

const comissao = ("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")
const resp10 = Number(prompt (comissao))
console.log(comissao, resp10)
console.log(typeof resp10)

const admissao = ("Informe o ano de admissão:")
const resp11 = Number(prompt (admissao))
console.log(admissao, resp11)
console.log(typeof resp11)

console.log(`O(a) funcionario(a) ${resp1}, nascido(a) em ${resp2}, com endereço em ${resp3},
portador(a) do cpf ${resp4}, com nivel de escolaridade ${resp5}, portador(a) da CNH ${resp6},
 pai/mae de ${resp7} filho(s), cargo atual de ${resp8}, recebendo salario de ${resp9}, com acrescimo de comissao ${resp10},
inicio de admissao ${resp11}.`)










