/* 
let a = 10
let b = 25 */
let A = 10;
let B = 25;
let X = null;
console.log("antes de trocar\n"+ A +"\n"+ B)

X=A
A=B
B=X

/* X = A+B;
A = X-A;
B = X-B;
console.log("a "+A,"b "+B,"x" +X) */


console.log("O novo valor de a é", A) // O novo valor de a é 25
console.log("O novo valor de b é", B) // O novo valor de b é 10