let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

console.log(typeof(nome))
console.log(typeof(idade))

// D - Ambas apareceram como undefined pois não defini valores para eles
// F - Ambos apareceram como Strings

console.log('Ola, meu nome é ' + nome + 'e tenho ' + idade )