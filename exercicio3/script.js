//Exercício 3

let nome = prompt("Qual o seu nome?")
let data = prompt("Qual sua data de nascimento? (utilize / para separar)")
let endereco = prompt("Qual seu endereço?")
let cpf = Number(prompt("Digite seu cpf"))
let escolaridade = prompt("Escolaridade")
let cnh = prompt("Possui CNH?")
let quantidadeFilhos = Number(prompt("Quantos filhos possui?"))
let cargo = prompt("Qual o seu cargo atual?")
let salario = Number(prompt("Qual seu salário atual?"))
let comissao = prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com 0.")
let anoAdmissao = Number(prompt("Informe o ano de admissão."))

//Tipos
    console.log(typeof nome, typeof data, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof quantidadeFilhos, typeof cargo, typeof salario, typeof comissao, typeof anoAdmissao)

//Impressão
    console.log("Nome completo é:",nome)
    console.log("Nascimento:",data)
    console.log("Endereço:", endereco)
    console.log("CPF:", cpf)
    console.log("Escolaridade:", escolaridade)
    console.log("Possui CNH?", cnh)
    console.log("Quantos filhos:", quantidadeFilhos)
    console.log("O cargo atual é:" , cargo)
    console.log("Meu salário atual é:" ,salario)
    console.log("Minha comissão é de:" ,comissao)
    console.log("Data de admissão:" ,anoAdmissao)
