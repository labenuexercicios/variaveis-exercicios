// Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(nome, idade)

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// O undefined foi impresso porque não atribuimos nenhum valor a variável.

// e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("qual seu nome?")
idade = prompt("qual sua idade?")

// 💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome,typeof idade)
// As variaveis foram definidas como string, pois tudo que a gente coloca no prompt ele retorna como string.

// g) Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log("Olá",nome, "você tem", idade, "anos")