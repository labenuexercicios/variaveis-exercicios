let nome
let idade

console.log(typeof(nome))
console.log(typeof(idade))

// Foi mostrado que o tipo é undefined, pois essa variável não teve nenhuma atribuição de valor ainda

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é o seu nome?")

console.log(typeof(nome))
console.log(typeof(idade))

// Ao receber a variável pelo prompt o valor é recebido como String

console.log("Olá", nome,"você tem",idade,"anos")