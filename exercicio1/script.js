console.log ('Exercicio 1')

// INÍCIO DA PARTE 1
console.log ('Parte 1')

let nome
let idade

console.log ('O tipo da variável nome é:', typeof nome)
console.log ('O tipo da variável idade é:', typeof idade)
// O tipo das variáveis são 'undefined' pois não inserimos nenhum valor nelas.

nome =  prompt('Digite o seu nome:')
idade = Number(prompt('Digite a sua idade:'))

console.log ('O tipo da variável nome é:', typeof nome)
console.log ('O tipo da variável idade é:', typeof idade)
// O tipo das variáveis são 'string' pois os valores que os usuários atribuem através do prompt são sempre string.
// É possível alterar o tipo da variável idade para 'number' da seguinte forma: idade = Number(prompt('Digite a sua idade:'))

console.log ('Olá', nome, 'você tem', idade, 'anos')
// FIM DA PARTE 1

// INÍCIO DA PARTE 2
console.log ('')
console.log ('Parte 2')

/*
let profissao = prompt ('Qual a sua profissão?')
let pet = prompt ('Qual o seu pet?')
let cor = prompt ('Qual a sua cor preferida?')

console.log (profissao, pet, cor)
*/

const perguntaProfissao = 'Qual a sua profissão?'
const perguntaPet = 'Qual o seu pet?'
const perguntaCor = 'Qual a sua cor preferida?'

let profissao = prompt (perguntaProfissao)
let pet = prompt (perguntaPet)
let cor = prompt (perguntaCor)

console.log (perguntaProfissao, '-', profissao)
console.log (perguntaPet, '-', pet)
console.log (perguntaCor, '-', cor)
//FIM DA PARTE 2