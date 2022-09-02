//# Exercício 1
//Construa um programa, seguindo os seguintes passos:

//**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

const nome = null

//**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

const idade = null

//**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(typeof(nome))
console.log(typeof(idade))

//**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//Por causa da atribuição, sem valor é um null, null é compreendido como objeto.

//**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

const nome1 = prompt('qual é o seu nome?')
const idade1 = prompt('qual é sua idade?')

//>💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
    

//**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof(nome1))
console.log(typeof(idade1))

//**g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

alert("fala meu querido " + nome1 + " é um prazer falar com uma pessoa com " + idade1 + " anos");

//>💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
//```jsx
//console.log(valor1, valor2)
//```