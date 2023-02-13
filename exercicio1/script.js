//let nome
//let idade

//console.log(typeof(nome), typeof(idade))
// essa variavel deu indefinido por não ter atribuido nem um valor a essa variavel

//let nome = prompt("Qual seu nome?")
//let idade = prompt("Qual seu idade?")

//console.log(typeof(nome), typeof(idade))
/* as variáveis aparecem como string pois o tipo delas não foi definido */

//console.log(`Olá,${nome}, você tem ${idade}`)

/* const pergunta1 = prompt("Está de dia?")
const pergunta2 = prompt("Vai chover?")
const pergunta3 = prompt("Tem roupa no varal?")

console.log(pergunta1, pergunta2, pergunta3)

const resposta1 = pergunta1
const resposta2 = pergunta2
const resposta3 = pergunta3 */

const pergunta1 = "Está de dia?"
const resposta1 = prompt(pergunta1).toLocaleUpperCase()
console.log(`${pergunta1} - ${resposta1}`)

const pergunta2 = "Vai chover?"
const resposta2 = prompt(pergunta2).toLocaleUpperCase()
console.log(`${pergunta2} - ${resposta2}`)

const pergunta3 = "Tem roupa no varal?"
const resposta3 = prompt(pergunta3).toLocaleUpperCase()
console.log(`${pergunta3} - ${resposta3}`)