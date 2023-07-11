let nome = ""
const idade = Number("")
console.log(typeof nome, typeof idade);
//As variaveis são do tipo string e number. O nome é string pois é um texto e a idade um Number pois transformei ela usando o Number(""),
//se não fosse por isso ela seria uma String, já que o programa não sabe que idade=número.

let name = prompt("Qual o seu nome?")
const age = Number(prompt("Qual a sua idade?"))
console.log(typeof name, typeof age)
//Mesma coisa que o anterior

console.log("Olá,", name,", você tem", age, "anos.")
//Não sei como deixar a vírgula após o nome sem o espaçamento

