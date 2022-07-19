let a = 20;
let b = 30;

console.log(`O novo valor de a é `,"A" +b, `O novo valor de a é `,"B" +a); //O novo valor de A é 25 e o valor de B é 10
// variasveis A, B, com valores distintos, simples, mas acredito sem muita logica a inversao direto no console log. 

//Solução em aula
let A = 20;
let B = 30;

A = A + B //A=50; B=30
B = A - B //A=50; B=20
A = A - B //A=30; B=20

console.log(`O novo valor de a é `,"A" +A, `O novo valor de a é `,"B" +B);