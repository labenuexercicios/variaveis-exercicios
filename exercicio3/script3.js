// ATRIBUINDO PERGUNTAS AS VARIAVEIS 

let nomeCompleto = "Seu nome completo: "
let dataNascimento = "Sua data de nascimento: "
let endereco = "Seu endereço: "
let cpf = "Seu CPF: "
let escolaridade = "Sua escolaridade: "
let possuiCnh = "Tem CNH? "
let quantidadeFilhos = "Quantos filhos possui? "
let cargoAtual = "Seu cargo atual: "
let salario = "Qual seu salário? "
let recebeComissao = "Recebe comissao? Aperte em azul caso SIM e cancel caso NAO"
const anoAdmissao = "Ano de admissao: "

// USUÁRIO ATRIBUINDO RESPOSTAS AS VARIAVEIS

let a = prompt(nomeCompleto)
let b = prompt(dataNascimento)
let c = prompt(endereco)
let d = prompt(cpf)
let e = prompt(escolaridade)
let f = confirm(possuiCnh)
let g = Number(prompt(quantidadeFilhos))
let h = prompt(cargoAtual)
let i = Number(prompt(salario))
let j = confirm(recebeComissao)
let k = Number(prompt(anoAdmissao))

// IMPRIMINDO AS RESPOSTAS DO USUÁRIO

console.log("Nome: ", a, typeof a);
console.log("Data de Nascimento: ", b, typeof b);
console.log("Endereço: ",c, typeof c);
console.log("CPF: ", d, typeof d);
console.log("Escolaridade: ", e, typeof e);
console.log("Possui CNH? ", f, typeof f);
console.log("Quantidade de filhos: ", g, typeof g);
console.log("Cargo atual: ", h, typeof h);
console.log("Salário: ", i, typeof i);
console.log("Recebe comissao? ", j, typeof j);
console.log("Ano de admissao: ", k, typeof k);


