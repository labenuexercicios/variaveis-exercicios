/*
const name = ""
let age = ""
console.log(typeof name, typeof age)
Declarando assim name e age são strings vazias
Se declarar como null o typeof resulta em objetos
*/

const name = prompt("Digite seu nome completo:")
let age = Number(prompt("Digite sua idade:"))
console.log(typeof name, typeof age)
console.log(` Olá ${name}, você tem ${age} anos. 
 Onde ${name} e ${age} são os valores que o usuário inseriu.`)

 //realizando o casting pra idade transformamos o tipo
 //string para o tipo número como é printado no log