//const nome = null
//let idade = null

//console.log(typeof nome, typeof idade)
//tipo da variavel aparece como objeto

//const nome = prompt('Qual seu nome?')
//let idade = prompt('Qual a sua idade?')

//console.log(typeof nome, typeof idade)
//tipo da variavel irá aparecer como string, sempre aparecerá dessa forma, para corrigir devemos fazer da forma abaixo, marcar como Number

const nome = prompt('Qual o seu nome?')
let idade = Number (prompt('Qual a sua idade?'))

console.log('Olá,', nome, 'você tem', idade, 'anos')
