const nome = prompt("Como você se chama?")
let idade = prompt("Qual a sua idade?")

console.log ("Nome é do tipo", typeof nome,"| Idade é do tipo", typeof idade)

// O tipo de variável ficou como um objeto apenas para o nome, pois como o const precisa ter a definição de um valor e não é alterável, precisei definir como o tipo null, enquanto a idade ainda não foi definida e ficou dessa maneira por falta do dado dentro da variável, que poderá ser alterado ao colocar um comando de input de valores.

// A variável "Idade" está retornando como string, já que ela puxa automaticamente como string ao preencher, mesmo sendo apenas número. Preciso fazer a conversão para o tipo number.

console.log ("Olá", nome,", você tem", idade, "anos!")