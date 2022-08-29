//Escreva um programa que faça 3 perguntas de Sim ou Não, e guarde cada resposta em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
/*prompt("vc tem pets?")
prompt("vc gosta de futebol?")
prompt("vc gosta de video games?")*/


//a) Crie três novas variáveis, contendo as respostas;
/*let pets = prompt("vc tem pets?")
let fut = prompt("vc gosta de futebol?")
let play = prompt("vc gosta de video games?")

//b) Imprima na tela todas as respostas. Por exemplo:
//SIM
//SIM
//NÃO

console.log(pets)
console.log(fut)
console.log(play) */

//c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de prompt deve mudar um pouco, como mostrado abaixo:

//mandando a pergunta como texto direto
//const respostaA = prompt("Você está usando uma roupa azul hoje?");
/*let pets = prompt("vc tem pets?")
let fut = prompt("vc gosta de futebol?")
let play = prompt("vc gosta de video games?")*/


//mandando a pergunta como variável
//const perguntaA = "Você está usando uma roupa azul hoje?";
//const respostaA = prompt(perguntaA);

//d) Altere seu programa, para que a impressão das respostas também tenha as perguntas. Por exemplo:

//Você está usando uma roupa azul hoje? - SIM

let pets
let fut 
let play 

console.log("vc tem pets?", pets = prompt("vc tem pets?"))
console.log("vc gosta de futebol?", fut = prompt("vc gosta de futebol?"))
console.log("vc gosta de video games", play = prompt("vc gosta de video games?"))