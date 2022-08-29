let a = prompt("Qual sera o valor da variavel a?")
let b = prompt("Qual sera o valor da variavel b?")

let antiga = a;

a = b;
b = antiga;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);