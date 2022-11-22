

const nomeCompleto = prompt('Digite seu nome completo');
const  dataDeNascimento = Number(prompt('Digite sua data de nascimento'));
let endereco = prompt('Digite seu endereço');
const documentoCpf = Number(prompt('Digite seu CPF'));
let formacao = prompt('Qual a sua formação?');
let habilitacao = prompt('Possui CHN?');
let filhos = Number (prompt('Quantos filhos possui?'));
let cargoAtual = prompt('Qual o seu cargo atual?');
let salario = Number (prompt('Qual o seu salário?'));
let comissao = Number (prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero'));
let anoDeAdmissao = Number (prompt('Qual o ano de admissão?'));

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereco,  typeof documentoCpf, typeof formacao, typeof habilitacao, typeof filhos, typeof cargoAtual, typeof salario, typeof comissao, typeof anoDeAdmissao);

console.log(` Nome Completo : ${nomeCompleto} \n Data de Nascimento: ${dataDeNascimento} \n Endereço: ${endereco} \n CPF: ${documentoCpf} \n Área de formação: ${formacao} \n Habilitado: ${habilitacao} \n Filhos: ${filhos} \n Cargo: ${cargoAtual} \n Salário: ${salario} \n Comissão: ${comissao} \n Ano de admissão: ${anoDeAdmissao}`);

























