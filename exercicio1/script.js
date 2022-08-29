
// **a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

// **b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

let nome = null
let idade = null

// **c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(typeof nome, typeof idade);

// **d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//  -----> É um bug que acompanha o  Javascript desde a primeira versão do mesmo (http://2ality.com/2013/10/typeof-null.html)

// **e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt('Qual é Seu nome?');
idade = Number(prompt ('Qual é sua idade?'));


// >💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
    

// **f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome, typeof idade);

// **g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
console.log (`Olá ${nome},  você tem ${idade} anos.`);
// >💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
// ```jsx
// console.log(valor1, valor2)
// ```
    