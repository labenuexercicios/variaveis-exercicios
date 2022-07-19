//Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

// ```jsx
// let a = 10
// let b = 25
// ```

// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

// ```jsx
// let a = 10
// let b = 25

let A = 10;
let B = 25;
let X = null;

// A = 25 B = 10

X = A+B;
A = X-A;
B = X-B;

console.log('O novo valor de A é', A);
console.log('O novo valor de B é', B);