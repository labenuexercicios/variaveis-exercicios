const Name = prompt("Nome completo");
let date = Number(prompt("Data de nascimento no formato: DD/MM/YYYY"));
let address = prompt("Endereço completo");
const CPF = Number(prompt("CPF"));
let escolaridade = prompt("A sua escolaridade");
let CNH = prompt("Possui CNH?");
let children = prompt("Quantos filhos possui?");
let cargo = prompt("Cargo atual");
let salary = Number(prompt("Salário atual"));
let comission = prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero");
const admissionAge = prompt("Informe o ano de admissão");

console.log(`
    Nome: ${typeof Name}\n
    Data de Nascimento: ${typeof date}\n
    Endereço: ${typeof address}\n
    CPF: ${typeof CPF}\n
    Escolaridade: ${typeof escolaridade}\n
    Possui CNH?: ${typeof CNH}\n
    Quantos filhos possui?: ${typeof children}\n
    Cargo atual: ${typeof cargo}\n
    Salário: ${typeof salary}\n
    Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero: ${typeof comission}\n
    Informe o ano de admissão: ${typeof admissionAge}\n
`);

document.getElementById('relatory').innerHTML = `O funcionário ${Name}, de CPF ${CPF} e de escolaridade ${escolaridade}, nasceu em ${date} e mora no endereço ${address}. Possui CNH? ${CNH}. Possui ${children} filho(s). Atualmente, trabalha como ${cargo} e tem o salário de ${salary}, além disso, recebe a comissão de ${comission} e entrou na empresa em ${admissionAge}`;

console.log(`O funcionário ${Name}, de CPF ${CPF} e de escolaridade ${escolaridade}, nasceu em ${date} e mora no endereço ${address}. Possui CNH? ${CNH}. Possui ${children} filho(s). Atualmente, trabalha como ${cargo} e tem o salário de ${salary}, além disso, recebe a comissão de ${comission} e entrou na empresa em ${admissionAge}`);