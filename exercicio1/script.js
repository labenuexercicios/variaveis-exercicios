let nome = prompt('Qual é o seu nome?');
let idade = +prompt('Qual sua idade?');
console.log(typeof nome, typeof idade);
//quando coloquei prompt apenas apresentou undefined pois o prompt idade nao era numero,
// entretando quando agreguei o "+", 
//na hora ele identificou que era Number. Agora esta reconhecido o string do number.

console.log(nome, idade);

console.log('Olá', nome, 'você tem', idade, 'anos');