// Parte 1

let fullName
let age

console.log(`
  O tipo da variável "fullName" é: ${typeof fullName}.\n 
  O tipo da variável "age" é: ${typeof age}.
  `)

/* 
  
 Pela ausência de valores atribuídos às variáveis "fullName" e "age", 
 não há como definir seus tipos de dados. Por isso, o console retorna que 
 são variáveis "undefined".
  
*/

alert(`O tipo da variável "fullName" é: ${typeof fullName}`)
alert(`O tipo da variável "age" é: ${typeof age}`)

fullName = prompt('Qual é o seu nome?')
age = prompt('Qual é a sua idade?')

console.log(`
  O tipo da variável "fullName" é: ${typeof fullName}.\n 
  O tipo da variável "age" é: ${typeof age}.
  `)

/* 
  
 Após a atribuição dos valores pelo usuário. O retorno define ambos os
 tipos como "string". Isso acontece pelo fato de que o método prompt  
 retorna apenas strings.
  
*/

alert(`O tipo da variável "fullName" é: ${typeof fullName}`)
alert(`O tipo da variável "age" é: ${typeof age}`)
alert(`Olá, ${fullName}, você tem ${age} anos de idade.`)

// Parte 2

const INPUT_QUESTION_1 = prompt(`Você brincou com as gatas hoje?`)
console.log(INPUT_QUESTION_1)

const INPUT_QUESTION_2 = prompt(`Verificou se precisa comprar algo no mercado?`)
console.log(INPUT_QUESTION_2)

const INPUT_QUESTION_3 = prompt(`Você já bebeu água o suficiente hoje?`)
console.log(INPUT_QUESTION_3)

console.log(`
  Você brincou com as gatas hoje? — ${INPUT_QUESTION_1}
  Verificou se precisa comprar algo no mercado? — ${INPUT_QUESTION_2}
  Você já bebeu água o suficiente hoje? — ${INPUT_QUESTION_3}
`)
