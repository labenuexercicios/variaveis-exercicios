console.log('Exercício 3')

console.log ('Olá colaborador(a)!')

const nome = prompt('Informe o seu nome:')
const nascimento = prompt('Informe sua data de nascimento:')
let endereço = prompt('Informe o seu endereço:')
const cpf = Number(prompt('Informe o seu CPF:'))
let escolaridade = prompt('Informe a sua escolaridade (Fundamental, Médio, Superior completo, superior incompleto, MBA/Pós/Mestrado):')
let cnh = confirm('Possui CNH? Clique em "Ok" para sim e "Cancel" para não')
let filhos = Number(prompt('Informe a quantidade de filhos que possui:'))
let cargo = prompt('Informe o cargo atual:')
let salario = Number(prompt('Informe seu salário:'))
let comissao = Number(prompt('Recebe comissão? Caso sim, informe a porcentagem. Caso não, informe "0":'))
const admissao = Number(prompt('Informe o ano de admissão:'))

let apoio

console.log ('')
console.log ('O tipo da variável nome é:', typeof nome,
'\nO tipo da variável nascimento é:', typeof nascimento,
'\nO tipo da variável endereço é:', typeof endereço,
'\nO tipo da variável cpf é:', typeof cpf,
'\nO tipo da variável escolaridade é:', typeof escolaridade,
'\nO tipo da variável cnh é:', typeof cnh,
'\nO tipo da variável filhos é:', typeof filhos,
'\nO tipo da variável cargo é:', typeof cargo,
'\nO tipo da variável salario é:', typeof salario,
'\nO tipo da variável comissao é:', typeof comissao,
'\nO tipo da variável admissao é:', typeof admissao)

// console.log ('O tipo da variável nome é:', typeof nome)
// console.log ('O tipo da variável nascimento é:', typeof nascimento)
// console.log ('O tipo da variável endereço é:', typeof endereço)
// console.log ('O tipo da variável cpf é:', typeof cpf)
// console.log ('O tipo da variável escolaridade é:', typeof escolaridade)
// console.log ('O tipo da variável cnh é:', typeof cnh)
// console.log ('O tipo da variável filhos é:', typeof filhos)
// console.log ('O tipo da variável cargo é:', typeof cargo)
// console.log ('O tipo da variável salario é:', typeof salario)
// console.log ('O tipo da variável comissao é:', typeof comissao)
// console.log ('O tipo da variável admissao é:', typeof admissao)

console.log ('')

if (cnh == true) {
    apoio = 'Possui CNH? Sim'
} else {
    apoio = 'Possui CNH? Não'
}

console.log ('Segue abaixo os dados informados:')

console.log ('Nome:', nome,
'\nNascimento:', nascimento,
'\nEndereço:', endereço,
'\nCPF:', cpf,
'\nEscolaridade:', escolaridade,
'\n' + apoio,
'\nQuantidade de filhos:', filhos,
'\nCargo atual:', cargo,
'\nSalário: R$', salario,
'\nComissão:', comissao, '%',
'\nAno de admissão:', admissao)

// console.log ('Nome:', nome)
// console.log ('Nascimento:', nascimento)
// console.log ('Endereço:', endereço)
// console.log ('CPF:', cpf)
// console.log ('Escolaridade:', escolaridade)
// console.log (apoio)
// console.log ('Quantidade de filhos:', filhos)
// console.log ('Cargo atual:', cargo)
// console.log ('Salário: R$', salario)
// console.log ('Comissão:', comissao, '%')
// console.log ('Ano de admissão:', admissao)