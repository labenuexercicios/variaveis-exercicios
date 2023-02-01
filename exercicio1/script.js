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

console.log ('\nOlá', nome, 'você tem', idade, 'anos')
// FIM DA PARTE 1

// INÍCIO DA PARTE 2
console.log ('')
console.log ('Parte 2')

const perguntaGames = 'Você gosta de jogos eletrônigos?'
const perguntaEsporte = 'Você gosta de praticar esportes?'
const perguntaAcademia = 'Qual a sua cor preferida?'
const apoio = 'Clique em "Ok" para sim ou "Cancel" para não'

let games = confirm (perguntaGames, apoio)
let esporte = confirm (perguntaEsporte, apoio)
let academia = confirm (perguntaAcademia, apoio)

if (games == true) {
    console.log (perguntaGames, '- Sim')    
} else {
    console.log (perguntaGames, '- Não')
}

if (esporte == true) {
    console.log (perguntaEsporte, '- Sim')    
} else {
    console.log (perguntaEsporte, '- Não')
}

if (academia == true) {
    console.log (perguntaAcademia, '- Sim')    
} else {
    console.log (perguntaAcademia, '- Não')
}
//FIM DA PARTE 2