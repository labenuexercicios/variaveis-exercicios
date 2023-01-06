const nome = "Digite seu nome completo"
const dataNascimento = "Digite sua data de nascimento (use /)"
const endereco = "Digite seu enderço?"
const cpf = "Digite seu CPF"
const escolaridade = "Digite sua escolaridade"
const cnh = "Possui CNH?"
const filhos = "Quantos filhos tem?"
const cargo = "Cargo atual"
const salario = "Qual sua renda?"
const comissao = " Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"
const admissao = "Informe o ano de admissão"

const respNome = String(prompt(nome));
const respDataNascimento = String(prompt(dataNascimento));
const respEndereco = String(prompt(endereco));
const respCpf = Number(prompt(cpf));
const respEscolaridade = String(prompt(escolaridade));
const respCnh = prompt(cnh);
const respFilhos = Number(prompt(filhos));
const respCargo = String(prompt(cargo));
const respSalario = Number(prompt(salario));
const respComissao = Number(prompt(comissao));
const respAdmissao = Number(prompt(admissao));

    console.log(typeof(respNome));
    console.log(typeof(respDataNascimento));
    console.log(typeof(respEndereco));
    console.log(typeof(respCpf));
    console.log(typeof(respEscolaridade));
    console.log(typeof(respCnh));
    console.log(typeof(respFilhos));
    console.log(typeof(respCargo));
    console.log(typeof(respSalario));
    console.log(typeof(respComissao));
    console.log(typeof(respAdmissao));

console.log(respNome,"\n",respDataNascimento,"\n",respEndereco,"\n",respCpf,"\n", 
respEscolaridade,"\n",respCnh,"\n",respFilhos,"\n",respCargo,"\n",respComissao,"\n",respAdmissao)