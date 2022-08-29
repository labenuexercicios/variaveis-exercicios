//Construa um programa, seguindo os seguintes passos:

//a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome 

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

console.log(typeof(nome))
console.log(typeof(idade))

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

console.log(typeof(nome)) //imprime undefined pois não foi atribuido nenhum tipo específico
console.log(typeof(idade)) //imprime undefined pois não foi atribuido nenhum tipo específico

//e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("qual o seu nome?")
idade = prompt("qual a sua idade?")

///💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof(nome))//virou string
console.log(typeof(idade))//virou string

//g) Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("olá,", nome,"! você tem ", idade)

//💡 Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:



