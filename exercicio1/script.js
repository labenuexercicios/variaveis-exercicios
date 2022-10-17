//const nome = null
//let idade  = null

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof("Essa variável é:", nome))
console.log(typeof("Essa variável é:", idade))

/*O erro se deveu a: havia dito que uma variavel era NULL, após isso
tentei passar o prompt, perguntando ao "usuário", o valor dela */
// O prompt sempre retornará uma string.

console.log("Olá", nome, "você tem:", idade)