//A Declare uma variável para armazenar um nome, sem atribuir um valor.
const nome = prompt('qual seu nome?')

//BDeclare uma variável para armazenar uma idade, sem atribuir um valor.
let idade = prompt('qual a sua idade?')


//C Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log( typeof nome)
console.log( typeof idade)

//D  Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// (idade) foi impresso como string por que ela não contem numeros, por mais que se trate de um numeral

//E Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
const nomeDoUsuario = 'victor'
let idadeDoUsuario = '20'
// E Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(nomeDoUsuario)
console.log(idadeDoUsuario)

// F Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
 console.log('olá', nome, 'voce tem', idade, 'anos...')
 
