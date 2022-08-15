let nome 
let idade 

console.log(typeof nome ); // variavel underfined , nao há valor atribuido
console.log(typeof idade); // variavel underfined , nao há valor atribuido

nome = prompt("Digite o seu nome")
console.log(nome)
idade = prompt("e digite sua idade")
console.log(idade)

console.log( typeof nome ) // retorna uma string , prompt retorna string
console.log (typeof idade) // retorna uma string , prompt retorna string

console.log(`Ola ${nome} você tem ${idade} anos`)