let perguntaNome = prompt("Qual seu nome ?")
let perguntaIdade = +prompt("Qual a sua idade ?")

const nome = perguntaNome

let idade = perguntaIdade

console.log( typeof idade, typeof nome)
// undefined significa que a variavel está sem definição ou seja sem valor.
// o valor string foi acusado no console, pois as aspas representam uma string
// o valor das variaveis tiveram que mudar por outras variaveis para receber o valor final do prompt, e tbm percebi que o valor recebido pelo prompt era string e teria que receber number, pra isso adicionei um +antes do prompt para o number ser recebido.
// tive que mudar a ordem das variaveis para que o javascript assimilasse a logica dos códigos.
let welcome = alert ("olá " + nome + " você tem  " + idade + " anos Seja bem vindo" )
console.log("olá " , nome , " você tem  ", idade , " anos Seja bem vindo" )