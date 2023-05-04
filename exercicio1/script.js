// a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.
let nome;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.
let idade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof nome); // output: "undefined"
console.log(typeof idade); // output: "undefined"

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//  o tipo da variavel foi impresso por conta do typeof que exibe o tipo da variavel,

// e) Depois disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome); // output: "string"
console.log(typeof idade); // output: "string"
// Agora que o usuário digitou um valor, as variáveis têm o tipo "string".

// g) Para finalizar, imprima na tela a mensagem: "Olá, nome, você tem idade anos". Lembre-se: nome e idade são os valores inseridos pelo usuário.
console.log("Olá, " + nome + ", você tem " + idade + " anos.");
