let nome;
let idade;

console.log (typeof nome); //undefined, não há valor atribuido a variável
console.log (typeof idade);//undefined, não há valor atribuido a variável

nome = prompt ("Qual o seu nome?");
console.log(nome);
idade = prompt ("Qual a sua idade?");
console.log(idade);

console.log (typeof nome); //string, prompt sempre retora uma string
console.log (typeof idade);// string, prompt sempre retora uma string

console.log ("Olá",nome,", você tem", idade, "anos.");
