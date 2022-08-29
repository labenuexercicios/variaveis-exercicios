//a, b, c, d

// let nome 
// let idade 
// console.log(typeof nome, typeof idade)

//Foi impresso undefined pq não foi atribuido valor as variaveis.

//e , f, g

const nome = prompt("Qual seu nome?");
let idade = prompt("Quantos anos vc tem?");

console.log(typeof nome, typeof idade)
//Mesmo sendo um numero, a variavel idade 
//tem o tipo string pq o prompt sempre retorna este tipo.

console.log(`Olá ${nome},  você tem ${idade} anos". Onde ${nome} e ${idade} são os valores que o usuário inseriu`)