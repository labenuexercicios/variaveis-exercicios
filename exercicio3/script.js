
let nomeCompleto = prompt("Digite seu nome completo: ");
let dataDeNascimento = prompt("Digite sua data de nacimento, separada por '/'");
let endereco = prompt("Digite seu endereço: ");
let cpf = prompt("Digite seu cpf: ");
let escolaridade = prompt("Digite sua escolaridade: ");
let cnh = prompt("Possui CHN? Responda apenas com Sim ou Não ");
let quantidadeFilhes = Number(prompt("Quantos filhes possui? "));
let cargoAtual = prompt("Digite seu cargo atual: ");
let salario = Number(prompt("Qual é o seu salário? "));
let comissao = Number(prompt("Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero."));
let anoDeAdmissão = Number(prompt("Digite seu ano de admissão na empresa: "));

console.log(typeof nomeCompleto);
console.log(typeof dataDeNascimento);
console.log(typeof endereco);
console.log(typeof cpf);
console.log(typeof escolaridade);
console.log(typeof cnh);
console.log(typeof quantidadeFilhes);
console.log(typeof cargoAtual);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof anoDeAdmissão);


console.log(`${nomeCompleto} nasceu em ${dataDeNascimento}. Mora em ${endereco}. Seu numero de CPF é ${cpf}. Sua escolaridade é ${escolaridade}. Tem ${quantidadeFilhes} filhes. Seu cargo atual é ${cargoAtual}. O salário de ${nomeCompleto} é ${salario}. Recebe uma comissão de ${comissao} % e entrou na empresa no ano ${anoDeAdmissão}.`);

