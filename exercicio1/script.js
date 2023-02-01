// let nome
// let idade
//console.log(typeof(nome), typeof idade)    // funciona das duas formas
// essa variavel deu indefinido por não ter atribuido nem um valor a essa variavel


// let nome = prompt("qual seu nome?")

// let idade = Number(prompt("qual sua idade?"))

//console.log(typeof(nome), typeof idade)

 // dessa vez a variavel apareceu namber e string por que eu atribui um valor a a essa variavel

// console.log( nome ,  idade )

//  console.log("ola " + nome + " voce tem " + idade + " anos ")

//  console.log("Olá pessoal, meu nome é", nome, "Eu tenho", idade)
//  console.log(`Olá ${nome} você tem ${idade}`)
//  console.log("Olá pessoal, meu nome é " + nome + " Eu tenho " + idade)

const perguntaCorTenis = " qual a cor do tenis? "

const perguntaCadarçoDoTenis = " tenis tem cadarço? "

const qualNumeroTenis = "que numero voce usa? "

// console.log(perguntaCorTenis, perguntaCadarçoDoTenis, qualNumeroTenis)

const corTenis = prompt(perguntaCorTenis)

const cadarçoTenis = prompt(perguntaCadarçoDoTenis)

const numeroTenis = prompt(qualNumeroTenis)

console.log(perguntaCorTenis, "-", corTenis)
console.log(perguntaCadarçoDoTenis, "-", cadarçoTenis)
console.log(qualNumeroTenis, "-", numeroTenis)
