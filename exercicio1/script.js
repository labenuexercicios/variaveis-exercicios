let nome = prompt ("Qual seu nome? ");
let idade = prompt ("Qual sua idade? ");


/* Ao executar o comando "typeof" é possivel verificar
que todos eles estão indefinidos porque não receberam 
uma atribuição de valor*/
 






alert ("Olá "+nome+ " Você tem "+idade);

console.log(typeof (nome),typeof (idade));


let perguntaTexto1 = "Teste pergunta 1"
let perguntaTexto2 = "Teste pergunta 2"
let perguntaTexto3 = "Teste pergunta 3"




let pergunta1 = prompt(perguntaTexto1);
let pergunta2 = prompt(perguntaTexto2);
let pergunta3 = prompt(perguntaTexto3);

console.log(pergunta1, pergunta2, pergunta3);
 

/* 
Exercício 1
• Crie uma variável para guardar o nome de um produto e
peça para o usuário inserir esse nome
• Crie uma variável para guardar o preço de um produto e
peça para o usuário inserir esse valor
O GERENTE FICOU DOIDO! Dê um desconto de 1 real no
preço do produto, guardando o novo preço na mesma
variável
 */

//Parte 01 - Variáveis

// EXERCÍCIO 01
const nomeDoProduto = prompt ("Insira o nome do produto")
let precoDoProduto = Number(prompt ("Insira o preço do produto"))
precoDoProduto = precoDoProduto - 1
console.log(`0 produto ${nomeDoProduto} custa R$${precoDoProduto}`)

//Parte 05 - Strings

/*  
Strings
• Podemos declarar strings de 3 maneiras:
O "Olá Mundo", 'Olá Mundo' ou `01á Mundo`
• Podemos colocar variáveis no meio de 2 jeitos:
O
"1
"Meu nome é " + nome + " e tenho " + idade + anos'
Meu nome é ${nome} e tenho ${idade} anos`
." 


Protótipo de Strings
• Propriedades
O length ⇒ número de caracteres, conta espaço Métodos
O
toLowerCase() e toUpperCase() minúsculo/maiúsculo
O trim() ⇒ retira espaço do início e do fim
O includes() => true/false se existem caracteres
replaceAll() = substitui caracteres por outros
 */

/* 
Exercício 5
Dada a frase " Hoje vou comer cenoura, ebaaa "realize as
operações:
• Imprima a frase inicial juntamente com seu tamanho
• Retire os espaços do início e do fim
• Faça com que possua apenas letras minúsculas
• Verifique se as palavras comer e batata estão presentes
• Substitua cenoura por batata
• Verifique novamente se possui as palavras comer e batata
 */

// EXERCÍCIO 05
const frase = " Hoje eu vou comer cenoura ebaaa "
console.log(frase, frase.length)
console.log(frase.trim(), frase.length)
console.log(frase.toLowerCase())
console.log("Tem a palavra comer?", frase. includes ("comer"))
console.log("Tem a palavra batata?", frase.includes ("batata"))
const novaFrase = frase.replaceAll("cenoura", "batata")
console.log(novaFrase)
console.log("Tem a palavra comer?", novaFrase.includes ("comer"))
console.log("Tem a palavra batata?", novaFrase.includes ("batata"))




//Parte 06 - Arrays

/* 
O que são arrays?
• Arrays nada mais são do que listas de elementos
Ex: lista de compras, lista de alunos, lista de números
da loteria, lista telefônica...
• No javascript, usamos colchetes para agrupar os itens
de uma lista:
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega
=
[2, 13, 26, 35, 41, 60] 

Acessando um elemento
• Acessamos os itens através da posição deles na lista!
• Funciona como se fosse uma lista numerada,
começando do 0:
Lista de Compras
0. Batata
1. Alface
2. Queijo
Qual é o item na posição 1?
Resposta: Alface


Protótipo de Arrays
• Propriedades
length quantidade de itens da lista
• Métodos
push()
adiciona item ao fim da lista
pop() => retira último item da lista
O includes() => true/false se existe o item
O
splice() => remover elementos sabendo o índice


Exercício 6
Dada a lista ["batata", "cenoura", "beterraba"] realize as
operações:
• Imprima o segundo item da lista
• Imprima o tamanho da lista
Adicione o item "mandioca"
• Verifique se há um item chamado cenoura
• Remova o item de índice 1
*/

// EXERCÍCIO 06
const listaDeCompras = ["batata", "cenoura", "beterraba"]
console.log(listaDeCompras [1])
console.log("Tamanho da lista:", listaDeCompras.length)
listaDeCompras.push("Mandioca")
console.log(listaDeCompras)
console.log("Tem cenoura?", listaDeCompras.includes ("cenoura"))
listaDeCompras.splice(1, 1)

//Parte 07 - Funções

