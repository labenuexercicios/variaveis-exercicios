let nome = "Seu nome é Fulano?"; //variavel nome
let idade = "Voce tem 30 anos?"; //variavel idade
let programador = "Voce não é programador?"; //variavel programador

confirm(nome) //booleano nome
confirm(idade) //booleano idade
confirm(programador) //booleano programador
// true, true, true / true, true, false ...
// mostra como se comporta em booleanos


let nome1 = "Seu nome é Julian?";
const respNome1 = prompt(nome1)
let idade1 = "Voce tem 30 anos?";
const respIdade1 = prompt(idade1)
let programador1 = "Voce é programador?";
const respProgramador1 = prompt(programador1)

console.log(respNome1, respIdade1, respProgramador1)
//apenas strings sem perguntas

let pergA = "Você é programador?";
let pergB = "Você é fullstack?";
let pergC = "Você estuda na Labenu?";

const resp1 = prompt(pergA);
const resp2 = prompt(pergB);
const resp3 = prompt(pergC);

console.log(pergA, " - ", resp1);
console.log(pergB, " - ", resp2);
console.log(pergC, " - ", resp3);
// // pedido no exercicio