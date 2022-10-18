let nome = null
let idade = null

console.log(typeof nome)
console.log(typeof idade)

console.log("Resposta: Foi impresso dessa maneira por que não foi dado nenhum valor as variaveis portanto,  esta imprimindo o tipo da variavel, que no caso é um objeto, pois é a variavel que vai receber os dados.")


nome = prompt("Qual é o seu nome?")
idade = prompt("Qual a sua idade?")


console.log(typeof nome)
console.log(typeof idade)



console.log("Agora o tipo foi alterado para string pois o tipo de variavel que esta sendo denominada agora é o valor das variavel, que no caso sempre sera string.")

console.log("Olá", nome + ",", "você tem", idade, "anos." )

let time = prompt("Qual é o seu time?")
let endereco = prompt("Onde você mora?")
let serie = prompt("Qual sua série favorita?") 

console.log("Meu time é o", time)
console.log('Eu moro em', endereco)
console.log("Minha série favorita é", serie)

variavelA = "Qual é o seu time?"
variavelB = "Onde voce mora?"
variavelC = "Qual sua série favorita?"

time = prompt(variavelA)
endereco = prompt(variavelB)
serie = prompt(variavelC)

console.log("Meu time é o", time)
console.log('Eu moro em', endereco)
console.log("Minha série favorita é", serie)

const perguntaA = "Você está usando uma roupa azul hoje?"
const respostaA = prompt(perguntaA)

console.log(perguntaA, '-', respostaA)