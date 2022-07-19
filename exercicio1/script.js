const nome = prompt ("qual seu nome?")
let idade = prompt("qual sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// o valor não está declarado mas as aspas faz com que seja lido como texto, logo, strings
// continuam como strings pois prompts sempre são strings, mesmo podendo ser numeros
console.log("Olá", nome, "você tem", idade, "anos")