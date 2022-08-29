let nome = null
let idade = null

console.log(typeof nome)
console.log(typeof idade)

// por conta de não esta definido a variável

let nomePrompt = prompt ("Qual é seu nome?")
let idadePrompt = prompt ("Qual é a sua idade ?")
console.log(nomePrompt)
console.log(idadePrompt)

console.log(typeof nomePrompt)
console.log(typeof idadePrompt)

// agora foi utilizado o prompt para perguntar ao usuario qual nome e idade, e depois verificado o tipo

console.log ("Ola ", nomePrompt, "voce tem ", idadePrompt, " anos")
