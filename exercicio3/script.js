// Pergunta o nome completo da pessoa colaboradora
let nomeCompleto = prompt("Qual é o seu nome completo?");

// Pergunta a data de nascimento da pessoa colaboradora
let dataNascimento = Number (prompt("Qual é a sua data de nascimento? (no formato dd/mm/aaaa)"));

// Pergunta o endereço da pessoa colaboradora
let endereco = prompt("Qual é o seu endereço?");

// Pergunta o CPF da pessoa colaboradora
let cpf = Number (prompt("Qual é o seu CPF?"));

// Pergunta a escolaridade da pessoa colaboradora
let escolaridade = prompt("Qual é a sua escolaridade?");

// Pergunta se a pessoa colaboradora possui CNH
let possuiCNH = confirm("Você possui CNH?");

// Pergunta quantos filhos a pessoa colaboradora tem
let quantidadeFilhos = Number(prompt("Quantos filhos você tem?"));

// Pergunta o cargo atual da pessoa colaboradora
let cargoAtual = prompt("Qual é o seu cargo atual?");

// Pergunta o salário da pessoa colaboradora
let salario = Number(prompt("Qual é o seu salário?"));

// Pergunta se a pessoa colaboradora recebe comissão
let recebeComissao = confirm("Você recebe comissão?");

// Pergunta o ano de admissão da pessoa colaboradora
let anoAdmissao = Number(prompt("Em que ano você foi admitido?"));

// Imprime no console o tipo de todas as variáveis
console.log(typeof nomeCompleto);
console.log(typeof dataNascimento);
console.log(typeof endereco);
console.log(typeof cpf);
console.log(typeof escolaridade);
console.log(typeof possuiCNH);
console.log(typeof quantidadeFilhos);
console.log(typeof cargoAtual);
console.log(typeof salario);
console.log(typeof recebeComissao);
console.log(typeof anoAdmissao);

// Imprime no console um relatório da pessoa colaboradora
console.log("Nome completo: " + nomeCompleto);
console.log("Data de nascimento: " + dataNascimento);
console.log("Endereço: " + endereco);
console.log("CPF: " + cpf);
console.log("Escolaridade: " + escolaridade);
console.log("Possui CNH: " + possuiCNH);
console.log("Quantidade de filhos: " + quantidadeFilhos);
console.log("Cargo atual: " + cargoAtual);
console.log("Salário: R$" + salario);
console.log("Recebe comissão: " + recebeComissao);
console.log("Ano de admissão: " + anoAdmissao);

// prompt  para axibir na caizinha
//confirm para verdadeiro ou falso
//number para definir numero