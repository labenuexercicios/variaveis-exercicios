//parte 1
let nome,idade,estado,bairro,numero,gaveta1,gaveta2,gaveta3 
console.log(typeof (nome ),  typeof (idade))
// Apareceu o tipo < undefined > ou seja , a falta de valor de uma variável 
nome = prompt('Qual é o seu nome? ')
idade = Number (prompt('Qual é a sua idade? '))
console.log(typeof (nome ),  typeof (idade))
console.log('Ola',nome,'Você tem',idade,'anos' )
console.log(`Olá ${nome} Você tem ${idade} anos`)
console.log("Olá pessoal, meu nome é " + nome + " Eu tenho " + idade)
//Parte 2 
estado = prompt ('Qual o estado que você mora ? ')
bairro = prompt ('Qual o nome do bairro ? ')
numero = Number (prompt ('Qual o numero da residência ?'))
console.log(`Estado: ${estado} Bairro: ${bairro} Numero: ${numero}`)

gaveta1 = estado
gaveta2 = bairro
gaveta3 = numero

console.log(`Qual é o seu nome?  ${nome}
Qual é a sua idade? ${idade}
Qual o estado que você mora ? ${gaveta1}
Qual o nome do bairro? ${gaveta2}
Qual o numero da residência ? ${gaveta3}`)



























































