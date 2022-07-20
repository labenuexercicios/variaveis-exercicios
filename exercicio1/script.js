let nome
let idade

console.log(typeof nome);
console.log(typeof idade);

// **d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// undefined já que não atribuimos nenhum tipo de valor a esta variavel

nome=prompt("Qual seu nome?");
idade=prompt("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);

console.log("Olá, meu nome é", nome, "e eu tenho", idade, "anos");
