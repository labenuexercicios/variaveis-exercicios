/*

//PARTE 1

let nome

let idade

console.log('O tipo da variável nome é:', typeof nome)

console.log('O tipo da variável idade é:', typeof idade)

// console.log(typeof(nome), typeof idade)

// As duas variáveis imprimiram comando undefined pois conforme informado no comando do exercício as variáveis não possuem valor definido.

nome = prompt('Qual é o seu nome?')

idade = Number(prompt('Qual é a sua idade?'))

console.log('O tipo da variável nome é:', typeof nome)

console.log('O tipo da variável idade é:', typeof idade)

// Após atribuir informações às variáveis é impresso como string pois os usuários atribuem valores para nome e idade e o prompt sempre vai imprimir como string.

console.log('Olá', nome, 'você tem', idade, 'anos')
console.log(`Olá ${nome} você tem ${idade} anos`)
console.log('Olá ' + nome + ' você tem ' + idade + ' anos')


console.log("Minha idade é \n idade:", idade)
*/

//PARTE 2

let sentimento = 'Você está se sentindo bem hoje?'
let tempo = 'Choveu hoje em sua cidade?'
let pet = 'Você tem animal de estimação?' 



let respostaA = prompt (sentimento)
let respostaB = prompt (tempo)
let respostaC = prompt (pet)

console.log(respostaA, respostaB , respostaC)
console.log(` 
${sentimento} - ${respostaA}
${tempo} - ${respostaB}
${pet} - ${respostaC}
`)



/*let a = prompt('Digite o valor de A')
let b = prompt('digite o valor de B')

console.log ('O valor de A é:', a)
console.log ('O valor de B é:', b)

console.log ('agora será invertido os valores')

let c = a
a = b
b = c

console.log ('O novo valor de A é:', a)
console.log ('O novo valor de B é:', b)

*/




