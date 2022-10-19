//Exercício 1


let nome = prompt("Qual é o seu nome")
console.log(typeof (nome, nome))

let idade = prompt("Qual é a sua idade?")
console.log(typeof idade, idade)
console.log(`Olá ${nome}, você tem ${idade} anos.`)

//  D) O tipo "underfined" foi impresso porque as variáveis "nome" e "idade" ainda não tem seu Valor definido
//  F) Notei que a variavel "idade" foi definida como um tipo String e não tipo Number



 //Parte 2

const perguntaUm = "Você gostaria de aprender a tocar violão?";
 const perguntaDois = "Já tentou alguma vez?";
 const perguntaTres = "Você aceitaria ter uma aula com @Fubajoe?";

 const respostaUm = prompt(perguntaUm);
 const respostaDois = prompt(perguntaDois);
 const respostaTres = prompt(perguntaTres);

 console.log(` ${perguntaUm} -${respostaUm}.\n ${perguntaDois}  -${respostaDois}.\n ${perguntaTres} -${respostaTres}.\n `)
