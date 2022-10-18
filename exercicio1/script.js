

let nome 
let idade 

console.log("nome tipo.->",typeof nome)
console.log("idade tipo->",typeof idade)
/* como esperado foi impresso undefined
   uma vez que as variáveis foram declaradas 
   sem atribuir um valor.
*/

nome = prompt("Digite seu nome..:")
idade = Number(prompt("Digite sua idade:"))
console.log("nome tipo.->",typeof nome)
console.log("idade tipo->",typeof idade)
/* como esperado, depois que foi atribuido  
   valores as variáveis através do prompt, 
   foi impresso: string e number, sendo que
   a variável idade teve seu contéudo string
   que é o padrão do prompt convertido através
   do Number para o tipo number, contudo
   uma verificação dos dados digitados se 
   faz necessária.
*/

console.log(`Olá ${nome} você tem ${idade} anos`)

