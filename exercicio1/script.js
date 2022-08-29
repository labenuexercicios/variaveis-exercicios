// # Exercício 1
// Construa um programa, seguindo os seguintes passos:

// **a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

let nome

// **b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

let idade

// **c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(typeof nome, typeof idade)

// **d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//Resposta: Se não houver uma atribuição o programa não consegue definir o tipo da variável então ela é identificada como "não definida" (undefined)

// **e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt("Qual seu nome?")

idade = prompt("Qual sua idade?")
    
// >💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
    
// **f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nome, typeof idade)

//Resposta: O tipo da variável idade é String e não Number 

// **g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

console.log(`"Olá ${nome},  você tem ${idade} anos"`)

// >💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
// ```jsx
// console.log(valor1, valor2)