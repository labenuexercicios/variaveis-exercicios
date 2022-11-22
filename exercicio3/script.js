//Exercicio 3

const nome = prompt("Fala meu patrão, qual seu nome?")
const datadenascimento = (prompt("Qual sua data de nascimento? *utilize as /")) //alterado usando o casting "Number".
let endereco = prompt("Qual seu endereco completo? *digite tudo em uma linha separando por virgula")
const cpf = prompt("Qual seu cpf? *sem pontos e traços")
let escolaridade = prompt("Qual seu nivel de escolaridade?")
let cnh = confirm("Você possui cnh?")
let filhos = Number(prompt("Quantos filhos você possui?"))
let cargo = prompt("Qual seu cargo atual na empresa que você trabalha?")
let salario = Number(prompt("Qual seu salário?"))
let comissao = confirm("Recebe comissão?")
if (comissao == 'True')
    comissao = prompt("Quantos %?")
else
    comissao = 0
let anodeadmissao = Number(prompt("Qual seu ano de admissão?"))

console.log(typeof nome, typeof datadenascimento, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargo, typeof salario, typeof comissao, typeof anodeadmissao)

console.log("Relatório do funcionario:\n")
console.log("-",nome)
console.log("-",datadenascimento)
console.log("-",endereco)
console.log("-",cpf)
console.log("-",escolaridade)
console.log("-",cnh)
console.log("-",filhos)
console.log("-",cargo)
console.log("-",salario)
console.log("-",comissao)
console.log("-",anodeadmissao)

