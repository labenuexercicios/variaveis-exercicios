let nome = null
let idade = null
    console.log(typeof nome)
    console.log(typeof idade)
// os valores impressos foram "OBJECT" pois as variáveis estão declaradas como "NULL".

nome = prompt("Qual seu nome?")
idade = prompt("Qual a sua idade?")
    console.log(nome)
    console.log(idade)
    console.log(typeof nome)
    console.log(typeof idade)
    // O primeiro está pegando o "tipo" da própria variável, e o segundo está pegando o "valor" da variável.
    
    console.log("Olá", nome + "," , "você tem", idade, "anos.")

    // Parte 2

let trabalha =  prompt("Você está trabalhando?")
let casado =    prompt("É casado?")
let temFilhos = prompt("Você tem filhos?")

    console.log("Você está trabalhando?:", trabalha)
    console.log("É casado?:", casado)
    console.log("Você tem filhos?:", temFilhos)

    //Alteração do programa
    
let pergunta1 = "Você está trabalhando?"
let pergunta2 = "É casado?"
let pergunta3 = "Você tem filhos?"

    trabalha =  prompt(pergunta1)
    casado =    prompt(pergunta2)
    temFilhos = prompt(pergunta3)

    console.log("Você está trabalhando?:", trabalha)
    console.log("É casado?:", casado)
    console.log("Você tem filhos?:", temFilhos)


    

