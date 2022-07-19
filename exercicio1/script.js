let nome;
let idade;

console.log(typeof(nome))
console.log(typeof(idade))

// Undefined significa indefinido. A variável foi declarada sem receber nenhum valor, então o motor do javascript não consegue identificar o valor da variável, portanto, ela recebe undefined


nome = window.prompt('Qual seu nome?');
idade = Number(window.prompt('Qual tua idade?'));

console.log(typeof(nome))
console.log(typeof(idade))

console.log(`Olá ${nome}, você tem ${idade} anos`)