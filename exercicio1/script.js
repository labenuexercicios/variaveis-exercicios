let nome;
let idade;

console.log(typeof nome, typeof idade);
// Undefined > Porque o tipo da variável não foi declarado

nome = prompt('Digite seu nome:');
idade = prompt('Digite sua idade:');

console.log(typeof nome, typeof idade);
// Se tornaram 'string' por causa do prompt

alert('Olá ' + nome + '! você tem ' + idade + ' anos!');
