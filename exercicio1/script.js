let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))

//d)Se eu não atribuo valor o tipo da variável será undefined

console.log(typeof nome)
console.log(typeof idade)

//f)Agora que o usuário atribui valor a variável, seu tipo mudou

console.log("Olá", nome, ". Você tem ", idade, " anos.")