let a = 10
let b = 25
console.log(a, b);

let c = a
a = b
b = c

console.log("o novo valor de a é", b);
console.log("o novo valor de b é", a);
console.log(a, b);