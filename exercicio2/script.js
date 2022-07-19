const pergunta1 = 'Você está respirando no modo automático?';
const pergunta2 = 'Você se sente bem?';
const pergunta3 = 'Você tem criatividade para elaborar perguntas aleatórias?';

let resposta1 = 'Sim';
let resposta2 = 'Sim';
let resposta3 = 'Não';

console.log(resposta1, resposta2, resposta3);

resposta1 = prompt(pergunta1);
resposta2 = prompt(pergunta2);
resposta3 = prompt(pergunta3);

console.log(pergunta1, '-', resposta1);
console.log(pergunta2, '-', resposta2);
console.log(pergunta3, '-', resposta3);
