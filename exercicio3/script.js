let nomeCompleto = prompt('Nome completo?')
const dataNascimento = (prompt('Data de nascimento?'))
let endereco = prompt ('Qual o seu endereço?')
let cpf = (prompt('Qual o seu cpf?'))
let escolaridade = prompt('Qual a sua escolaridade?')
let cnh = confirm ('possui cnh?')
let filhos = Number(prompt ('quantos filhos possui?'))
let cargo = prompt('cargo atual?')
let salario = Number(prompt('qual o seu salário?'))
let comissao = prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero')
let admissao = Number(prompt('informe o ano de admissão:'))

console.log(typeof nomeCompleto, typeof dataNascimento, typeof escolaridade, typeof cnh, 
typeof filhos, typeof cargo, typeof salario , typeof comissao, typeof admissao)

console.log(`Nome completo: ${nomeCompleto}\n Data de nascimento: ${dataNascimento}\n 
Endereço: ${endereco}\n CPF: ${cpf}\n Escolaridade ${escolaridade}\n Possui CHN? ${cnh}\n 
Quantos filhos possui? ${filhos}\n Cargo atual ${cargo}\n Salário: ${salario}\n 
Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero:
${comissao} %\n Informe o ano de admissão: ${admissao}`)








  
