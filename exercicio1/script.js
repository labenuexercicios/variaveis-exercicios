let nome
let idade
 
console.log(nome, typeof nome,idade, typeof idade )
 
// Os valores apareceram indefinidos nas variaveis por conta delas nao foram declaradas nenhum valor apos o seu nome.
 
 
 
let nomee= (prompt("digite o seu nome:"))
let age=Number(prompt ("digite a sua idade"))
 
console.log(nomee, typeof nomee, age,typeof age)
 
// foi necessario alterar o nome das variaveis para nao gerar conflito
 
console.log('ola',nomee,'voce tem',age,'anos')
