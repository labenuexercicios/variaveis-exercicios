let nome
let idade

console.log(typeof nome, typeof idade)

/*
apareceu undefined pois ainda não há valor atribuído às variáveis.
*/


nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

/*
tive um erro porque primeiramente disse que a 
minha variável NOME era uma constante sem valor definido.
justei o erro mudando de CONST para LET
*/

console.log(typeof nome, typeof idade)

/*
Ambas variáveis são Strings mesmo a idade sendo digitada como número
*/

console.log("Olá", nome, "você tem", idade, "anos.")