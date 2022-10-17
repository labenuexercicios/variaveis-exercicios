//let nome
//let idade
//console.log (nome, typeof nome)
//console.log (idade, typeof idade)

// As variáveis sem "=" geram variáveis com conteúdo "null" porque não estão vinculadas a um elemento.
// As duas variáveis são em formato de texto, ou strings, e não expressam valores numéricos.
// Para tal, eu deveria executar um código para transformá-las em números. 

let nome = prompt ("Diga seu nome")
let idade = prompt ("Diga sua idade")
console.log (idade, typeof idade)
console.log (nome, typeof nome)

console.log (`Olá ${nome}, você tem ${idade} anos`)

