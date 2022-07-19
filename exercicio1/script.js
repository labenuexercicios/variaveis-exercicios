let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

// Foi impresso o tipo 'undefined' por conta de não haver um valor determinante para referência.

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
console.log(nome);
console.log(idade);
console.log(typeof nome);
console.log(typeof idade);

// Se tornaram do tipo 'string' pois tanto o nome quanto a idade foi, por padrão do prompt, definido como texto.

console.log('Olá', nome, ', você tem', idade, 'anos.');