const nome = null
let idade = null

//tipos das variáveis - as duas estão sendo lidas apenas como "object"
console.log(typeof(nome))
console.log(typeof(idade))

//A variável não estava funcionando sem valor atribuído

const nomePrompt = prompt("Qual é o seu nome?")
console.log (nomePrompt)

let idadePrompt = prompt ("Qual é a sua idade?")
idadePrompt = Number(idadePrompt)
console.log (idadePrompt)
 
console.log("Olá", nomePrompt, " você tem ", idadePrompt, "anos")
// o tipo das variaveis 
console.log(typeof(nomePrompt))
console.log(typeof(idadePrompt))