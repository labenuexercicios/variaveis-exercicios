let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

/*As variáveis vieram como indefinidas, porque não atribui nenhum valor 
a elas */

nome = prompt("Qual é o seu nome?");
console.log(nome);
idade = prompt("Qual a sua idade?");
console.log(idade);



console.log(typeof nome);
console.log(typeof idade)

/*As variáveis mudaram para string, porque o prompt é 
uma caixa de texo*/

console.log("Olá!", nome, ", você tem", idade,"anos.")