//a) Crie três novas variáveis, contendo as respostas;

const perguntaA = prompt("voce mora no norte?");

const perguntaB = prompt("voce tem carro?");

const perguntaC = prompt("voce tem notebook?");


//b) Imprima na tela todas as respostas. Por exemplo:

console.log (perguntaA);
console.log (perguntaB);
console.log (perguntaC);

//c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de **prompt** deve mudar um pouco, como mostrado abaixo:
let regiaoP = 'voce mora no norte?'
let regiaoR = prompt(regiaoP)
let rideP = 'voce tem carro?'
let rideR = prompt(rideP)
let NoteP = 'voce tem notebook?'
let NoteR = prompt(NoteP)


//d) Altere seu programa, para que a impressão das respostas também tenha as **perguntas**. Por exemplo:
    
console.log('voce mora no norte?',perguntaA)
    
console.log('voce tem carro?',perguntaB)
    
console.log('voce tem notebook?',perguntaC) 