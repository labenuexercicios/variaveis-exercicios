const nome = prompt ("Infome seu nome completo")
console.log(typeof nome)

const nascimento = prompt("Informe sua date de nascimento, separando, dia, mês e ano por /")
console.log(typeof nascimento)

const endereco = prompt("Informe seu endereço")
console.log(typeof endereco)

const cpf = Number (prompt("Informe o numero de seu CPF"))
console.log(typeof cpf)

const escolaridade = prompt("Informe sua escolaridade")
console.log(typeof escolaridade)

const cnh = prompt("Você possui CNH?")
console.log(typeof cnh)

const quantFilhos = Number (prompt("Quantos filhos você tem"))
console.log(typeof quantFilhos)

const cargo = prompt("Informe seu cargo atual")
console.log(typeof cargo)

const salario = Number (prompt("Informe seu salário"))
console.log(typeof salario)

const comissao = prompt("Você recebe comissão? se sim, informe o porcentual, se não, responda com o numero zero")
console.log(typeof comissao)

const anoAdmissao = Number (prompt("Informe o ano da sua admissão"))
console.log(typeof anoAdmissao)

console.log("RELATÓRIO DO COLABORADOR")

console.log(" O Colaborador", nome,","," Nascido em: ",nascimento,",","reside no endereço", endereco,",","Com o número de CPF:", cpf, ".","Sua escolaridade é ", escolaridade, ".", "Possui CNH?", cnh, ".", "Ele tem", quantFilhos, " filhos e seu cargo atual é de ", cargo, ".", "Seu sálario atual é de", salario, ",", "e a porcentagem da sua comissão é: ", comissao, "e foi admitido da nada de ", anoAdmissao)