alert("Preencha com os dados do colaborador")

const nomePreencher = "Nome do colaborador" 
const dataNascimentoPreencher = "Data de Nascimento (xx/xx/xxxx)" 
let enderecoPreencher = "Endereço do colaborador" 
const cpfPreencher = "CPF do colaborador (xxx.xxx.xxx-xx)" 
let escolaridadePreencher = "Nível de escolaridade"
let filhosPreencher = "Quantos filhos o colaborador possui?"
let cargoPreencher = "Cargo do colaborador"
let salarioPreencher = "Salário do colaborador"
const anoAdmissaoPreencher = "Ano de Admissão"


const nome = prompt(nomePreencher)
const dataNascimento = prompt(dataNascimentoPreencher)
let endereco = prompt(enderecoPreencher)
const cpf = prompt(cpfPreencher)
let escolaridade = prompt(escolaridadePreencher)
let habilitacaoPreencher = confirm("Possui habilitação? Se sim, aperte em ok, caso não, clique em cancelar!")
let filhos = Number(prompt(filhosPreencher))
let cargo = prompt(cargoPreencher)
let salario = Number(prompt(salarioPreencher)) 
let comissaoPreencher = confirm("Recebe comissão? Se sim, aperte em ok, caso não, clique em cancelar!") 
let anoAdmissao = prompt(anoAdmissaoPreencher)

// console.log ("Relatório do Colaborador")
// console.log ("Nome:", nome) 
// console.log ("Data de nascimento:", dataNascimento)
// console.log ("Endereço:", endereco)
// console.log ("CPF:", cpf)
// console.log ("Nível de escolaridade:", escolaridade)
// console.log ("Possui habilitação?", habilitacaoPreencher)
// console.log ("Número de filhos:", filhos)
// console.log ("Cargo:", cargo)
// console.log ("Salario:", salario)
// console.log ("Possui comissão?", comissaoPreencher)
// console.log ("Ano de admissão:", anoAdmissao)

console.log ("Relatório do Colaborador", nome, "\n",
"Data de nascimento:", dataNascimento, "\n",
"Endereço:", endereco, "\n",
"CPF:", cpf,"\n",
"Nível de escolaridade:", escolaridade,"\n",
"Possui habilitação?", habilitacaoPreencher,"\n",
"Número de filhos:", filhos,"\n",
"Cargo:", cargo,"\n",
"Salario:", salario,"\n", 
"Possui comissão?", comissaoPreencher,"\n",
"Ano de admissão:", anoAdmissao)

// console.log ("Tipo nome:", typeof nome)
// console.log ("Tipo dataNascimento:", typeof dataNascimento)
// console.log ("Tipo endereco:", typeof endereco)
// console.log ("Tipo cpf:", typeof cpf)
// console.log ("Tipo escolaridade:", typeof escolaridade)
// console.log ("Tipo habilitacaoPreencher:", typeof habilitacaoPreencher)
// console.log ("Tipo filhos:", typeof filhos)
// console.log ("Tipo cargo:", typeof cargo)
// console.log ("Tipo salario:", typeof salario)
// console.log ("Tipo comissaoPreencher:", typeof comissaoPreencher)
// console.log ("Tipo anoAdmissao:", typeof anoAdmissao)

console.log ("Tipos das Variáveis", "\n", "Nome:", typeof nome, "\n", "Data de Nascimento:", typeof dataNascimento, "\n","Endereço:", typeof endereco, "\n", "CPF:", typeof cpf, "\n","Escolaridade:",typeof escolaridade, "\n","Habilitação:", typeof habilitacaoPreencher, "\n", "Filhos:", typeof filhos, "\n", "Cargo", typeof cargo, "\n", "Salario:", typeof salario, "\n", "Comissão", typeof comissaoPreencher, "\n","Ano de Admissão:", typeof anoAdmissao)
