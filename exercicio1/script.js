//**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.
// let nome =null; 


// //**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.
// let idade = null;

// //**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
// console.log(typeof nome, typeof idade);

// //**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// //**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// nome= prompt ("qual o seu nome?");
// idade = +prompt ('qual sua idade');
// //**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// console.log(typeof nome) 
// console.log(typeof idade)
// console.log ("Me chamo",nome, "tenho",idade);

let nome= null;
let idade= null;

console.log(typeof nome, typeof idade)

nome=prompt("qual o seu nome?")
idade=+prompt("qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá",nome,"você tem",idade,"anos")
