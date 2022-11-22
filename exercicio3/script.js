let nome = prompt("Nome completo");
const dataNasc =  Number(prompt("Data de Nascimento"));
let endereco = prompt("Digite seu endereço");
const cpf = Number(prompt("CPF"));
let escolaridade = prompt("Escolaridade");
const cnh = (prompt("Possui CNH?"));
let filhos =  Number(prompt("Quantos filhos possui?"));
let cargoAtual = prompt("Cargo atual");
let salario =  Number(prompt ("Salario"));
let comissao =  Number(prompt ("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"));
const anoAdmissao = Number(prompt ("Informe o ano de admissão"));

console.log (` ${typeof(nome)} \n ${typeof(dataNasc)} \n ${typeof(endereco)} \n ${typeof(cpf)} \n ${typeof(escolaridade)} \n ${typeof(cnh)}
 ${typeof (filhos)} \n ${typeof (cargoAtual)} \n ${typeof (salario)} \n ${typeof (comissao)} \n ${typeof (anoAdmissao)} `);

 console.log (` Nome ${nome} \n Data de Nascimento ${dataNasc} \n Endereço ${endereco} \n CPF ${cpf} \n Escolaridade ${escolaridade} \n Tem CNH? ${cnh}
 Filhos? ${filhos} \n Cargo Atual ${cargoAtual} \n Salário ${salario} \n Comissão ${comissao} \n Ano de Admissão ${anoAdmissao} `)


