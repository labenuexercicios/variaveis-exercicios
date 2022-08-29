let nome;
let idade; 

console.log(typeof nome);
console.log(typeof idade);

//não há valores atribuidos a elas (variaveis)
nome = prompt ("Qual é o seu nome?")
idade = prompt ("Quantos anos você tem?")

console.log(typeof nome);
console.log(typeof idade);
//os dois se tornaram string

console.log("Olá, " + nome + " você tem "+ idade + " anos.")
