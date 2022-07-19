// Escreva um programa que faça 3 perguntas de Sim ou Não, e guarde cada resposta em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

// a) Crie três novas variáveis, contendo as respostas;
// const respostaA = prompt("você mora sozinho?")
// const respostaB = prompt("você tem pets?")
// const respostaC = prompt("você estuda na labenu?")
// // b) Imprima na tela todas as respostas. Por exemplo:

// // SIM
// // SIM
// // NÃO

// console.log(respostaA)
// console.log(respostaB)
// console.log(respostaC)

// c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de prompt deve mudar um pouco, como mostrado abaixo:

// //mandando a pergunta como texto direto
// const respostaA = prompt("Você está usando uma roupa azul hoje?");

// //mandando a pergunta como variável
// const perguntaA = "Você está usando uma roupa azul hoje?";
// const respostaA = prompt(perguntaA);

const perguntaA = "você mora sozinho?"
const respostaA = prompt(perguntaA)

const perguntaB = "você tem pets?"
const respostaB = prompt(perguntaB)

const perguntaC = "você estuda na labenu?"
const respostaC = prompt(perguntaC)

// d) Altere seu programa, para que a impressão das respostas também tenha as perguntas. Por exemplo:

// Você está usando uma roupa azul hoje? - SIM
console.log(perguntaA,"-" ,respostaA)
console.log(perguntaB,"-" ,respostaB)
console.log(perguntaC,"-" ,respostaC)