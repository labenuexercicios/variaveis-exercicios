/* let nome 
let idade
console.log(typeof nome, typeof idade) */
// Foi impresso "Undefined" por eu não ter atribuido um valor a essas variáveis

let nome = prompt("Qual seu nome?")
let idade =  prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
// Dessa vez por ter definido o prompt para responder a pergunta, o typeof me retornou "String" ao invés de undefined.
console.log(`Olá, ${nome}, você tem ${idade} anos!`)