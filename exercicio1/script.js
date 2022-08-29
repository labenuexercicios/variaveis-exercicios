//let nome =
//let idade = 
// vai dar sem valor, pois não um valor atribuido aí dará undefined
const nome = prompt('Qual o seu nome?')


let idade = Number(prompt('Qual a sua idade?'))


console.log(typeof nome)
console.log(typeof idade)

//os dois tipos deram string, na idade eu deveria atribuir um number antes do valor para que dessa maneira a resposta não fosse lida como uma string e sim como um número.
//depois de adicionar o number antes do valor da variável o tipo da variável idade foi alterada para número, pois a resposta será dada em número, porém essa alteração se faz necessária pois por conta do prompt ela será lida com o type de string.
console.log(`Olá ${nome}, você tem ${idade} anos de idade.`)
