//Declare uma variável para armazenar um **nome**, sem atribuir um valor.
let nome = null
//Declare uma variável para armazenar uma **idade**, sem atribuir um valor.
let idade
//Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof nome, ",", typeof idade)
//Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
/*foi impreso para variavel *nome* o tipo object porque eu atribui o valor null
e para varievel *idade* o tipo foi undefined pois não atribui nenhum valor*/
//Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("Qual é seu nome?")
idade = prompt("Qual é sua idade?")
//Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
//recebi um erro pois minha variavel nome era const
//Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome, ",", typeof idade)
//minhas variaveis mudaram para string
//Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
console.log("Olá", nome, "você tem", idade, "anos")