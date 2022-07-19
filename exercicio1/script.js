let nome = prompt("Digite seu nome") 
const idade = Number(prompt("Digite sua idade"))

//Aqui foi impresso uma string, porque tudo que vem digitado do prompt, é considerado uma string.
console.log(typeof nome)

//Aqui também deveria ser uma string, já que, como foi dito antes, tudo que vem do prompt é considerado uma string. Porém, uma conversão de tipo primitikvo foi feita, transformando uma string em number, já que se tratando de idade, faz muito mais sentido ser um number.
console.log(typeof idade)

console.log("Ola" ,nome,",", "você tem" ,idade, "anos de idade.")



