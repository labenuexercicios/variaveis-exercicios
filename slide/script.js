//VARIÁVEIS E TIPOS PRIMITIVOS

// comentário em linha

/**
comentário
em
bloco
 */

/**
var
Declara uma variável, opcionalmente, inicializando-a com um valor.

let
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const
Declara uma constante de escopo de bloco, apenas de leitura.
 */

//null => valor intencional = nulo ou vazio
//underfined => valor indefinido
//NaN => não é um número



//------------------------------
// console.log("Olá mundo!")
//------------------------------
// prompt("Qual é o seu nome?")
//------------------------------
// const nome = "Jéssica D B"
// let idade = 30

// console.log("Olá!", "meu nome é", nome, "e eu tenho", idade, "anos.")
//------------------------------
// let pet = true
// const nomePet = "Cacau"
// let pets = null //valor intencional
// let numPets = 2.5

// console.log(typeof pet, typeof nomePet, typeof pets, typeof numPets)
//------------------------------
// const nome = prompt("Qual é o seu nome?")
// let idade = Number(prompt("Qual é a sua idade?"))
// let ano = String(2022)
// ano = Number(2022)
// console.log(nome, typeof nome, idade, typeof idade, ano, typeof ano)
//------------------------------

// let carro = {cor: "violeta", rodas: 4, gasolina: ["gasolina", true], motor: {cilindros:4, tamanho: 2.2}}

// console.log(carro)

// console.log(typeof carro, typeof carro.cor, typeof carro.rodas, typeof carro.gasolina, typeof carro.motor, typeof carro.motor.cilindros, typeof carro.motor.tamanho)


// console.log("meu carro é", carro.cor, "ele tem ", carro.rodas, "rodas, e o tanque de", carro.gasolina[0], "está cheio.")

//------------------------------mdn
/**
 "Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são."
 */

let pessoa = {
    nome: ["Jessy", "Jenny"],
    idade: 30,
    genero: "feminino",
    interesses: ["música", "natureza", "assuntos diversos"],
    bio: function() {
        alert(this.nome[0] + " " + this.nome[1] + " tem " + this.idade+ " anos de idade. Ela gosta de " + this.interesses[0] + " , " + this.interesses[1] + " e "+ this.interesses[2] + ".");
    },
    saudacao: function() {
        alert("Oi! Eu sou a "+ this.nome[0] + ".");
    },

}



console.log(
    //acessando valores com notação de ponto:
    pessoa.nome,
    pessoa.nome[0],
    pessoa.idade,
    pessoa.interesses[1],
    pessoa.bio(),
    pessoa.saudacao(),
    //atualizando valores:
    pessoa['nome'][1] = 'JJ',
    //criando novos membros:
    pessoa['olhos'] = 'castanhos',
    pessoa['pets'] = "felinos", "cães",
    pessoa.despedida = function() { alert( "Adeus a todos!" ); }, pessoa.despedida(),
    //acessando valores com notação de colchetes
    pessoa['pets'][0][1], pessoa['nome'][0], pessoa['nome'][1]
    )

//---

//obtendo valores personalizados pelo input
// let meusDadosNome = nomeInput.valor; // rever
// let meusDadosValor = nomeValor.valor; // rever
//console.log(pessoa[meusDadosNome] =  meusDadosValor)


let meusDadosNome = 'altura';
let meusDadosValor = '1.53m';
console.log(pessoa[meusDadosNome] =  meusDadosValor)

//---
//Entendendo o "this"
// "A palavra-chave "this" se refere ao objeto atual em que o código está sendo escrito (...) quando começamos a criar funções construtoras, etc, o this é muito útil — sempre lhe assegurará que os valores corretos estão sendo usados quando o contexto de um membro muda (exemplo: duas instâncias diferentes do objeto pessoa podem ter diferentes nomes, mas vão querer usar seu próprio nome ao usar a saudação)."

let pessoa1 = {
    nome: 'Jessy',
    saudacao: function (){
        alert('Oi! Meu nome é ' + this.nome + '.');
    }
}

let pessoa2 = {
    nome: 'Jenny',
    saudacao: function(){
        alert('Oi! Meu nome é ' + this.nome + '.');
    }
}
console.log(pessoa1.saudacao(), pessoa2.saudacao())

/*  
outra forma de fazer: em lugar de usar índice para acessar as propriedades de pessoa, criar um sub-namespace dentro do namespace da variavel nome do objeto pessoa, e acessá-lo pelo nome do subspace com a notação de ponto ou de colchetes:

...
nome: {primeiro:"Jessy", segundo:"Jenny"},
...
alert(this.nome.primeiro + " " + this.nome.segundo + ...
...
 alert("Oi! Eu sou a "+ this.nome.primeiro + ".");
...

//---acessando as propriedades com a notação de ponto:
 console.log(pessoa.idade, pessoa.nome[0])
 console.log(pessoa.idade, pessoa.nome.primeiro)
//---acessando as propriedades com a notação de colchetes:
console.log(pessoa['idade'], pessoa['nome'][0])
console.log(pessoa['idade'], pessoa['nome']['primeiro'])

"Fica muito parecido com a maneira que acessamos itens de um array, e é basicamente a mesma coisa, só que ao invés de usarmos um número de índice para selecionar um item, usamos o nome associado a cada valor. Não é por menos que objetos às vezes são chamados de arrays associativos — eles mapeiam strings a valores do mesmo modo que arrays mapeiam números a valores."
*/

/**
"O valor de um membro do objeto pode ser praticamente qualquer coisa. Em nosso objeto pessoa, temos uma string, um número, dois arrays e duas functions. Os primeiros quatro são data items (dados) e são referenciados como propriedades do objeto. Enquanto os dois últimos itens são funções que permitem que o objeto faça algo com esses dados. São chamados de métodos do objeto.

Um objeto como esse é chamado de objeto literal — ao pé da letra, escrevemos o conteúdo do objeto conforme o criamos. Isto está em contraste com objetos instanciados de classes, que veremos mais adiante.

É muito comum criar um objeto usando um objeto literal quando você deseja transferir uma série de itens de dados relacionados estruturados de alguma maneira, por exemplo, enviando uma solicitação para o servidor para ser colocado em um banco de dados. Enviar um único objeto é muito mais eficiente do que enviar vários itens individualmente, e é mais fácil trabalhar com um array, quando você deseja identificar itens individuais pelo nome."

 */

/**
Atualizando valores de objetos: 

pessoa.idade
30
pessoa.idade = 35;
35

pessoa.nome
['Jessy', 'Jenny']

pessoa['nome'][1] = 'JJ';
pessoa.nome
['Jessy', 'JJ']
 */

/**
 Criando novos membros de um objeto:
console.log(pessoa['olhos'] = 'castanhos')
'castanhos'
pessoa.olhos
'castanhos'


console.log(pessoa.despedida = function() {alert("Tô indo nessa! Tchau-tchau!")}, pessoa.despedida())
*/


//------------------------------ invertendo valores:
// let a = 1
// let b = 2
// let c
// c = a

// a = b
// b = c

// console.log(a, b)
//------------------------------
// let d = "D"
// let e = d
// console.log(d, e)

// let f, g = f = "duas variáveis numa única expressão"
// console.log(f, g)
//------------------------------

