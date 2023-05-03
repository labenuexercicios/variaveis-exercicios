alert("*** Bem Vindo ao sistema de cadastro do RH ***");

alert("*** Siga o Passo a passo ***");

let nomeCompleto = prompt("Digite seu nome completo: ");
let dataDeNascimento = prompt("Digite sua data de nascimento-> utilize o / para separar dd / mm / yy: ");

let endereco = prompt("Insira seu endereço completo: ");

const cpf = Number(prompt("Insira seu CPF: (SOMENTE NUMEROS"));

let escolaridade = prompt("Qual seu nivel de escolaridade?: ");

let cnh = prompt("Possui CNH?: ");

let filhos = prompt("Possui filhos?: ");

let cargoAtual = prompt("Qual o Seu cargo atual?: ");

let comissao = confirm("Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel")

let admissao = Number(prompt("Qual o ano de admissão? "));

//IMPRESSÃO DAS VARIAVEIS

console.log(nomeCompleto, dataDeNascimento, endereco, cpf, escolaridade, cnh, filhos, cargoAtual, comissao, admissao);

console.log("Funcionario: ", nomeCompleto, ", Nascimento: ", dataDeNascimento, ", Endereço: ", endereco, ", Numero de CPF: ", cpf, ", Escolaridade: ", escolaridade, ", tem CNH: ", cnh, ", Possui filhos? ", filhos, ", Seu cargo atual é: ", cargoAtual, ", Ganha comissão? ", comissao, ", e sua admissão foi na data: ", admissao);