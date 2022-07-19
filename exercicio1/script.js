let nome = '';
let idade = Number ;

console.log(typeof nome, typeof idade)

/* A varíavel nome foi impresso string por ter usado aspas,
 e a idade foi impresso function por ter coloca Number como seu tipo de dado */

 nome = prompt("qual seu nome?")
 idade = prompt("qual sua idade?")

 console.log(typeof nome, typeof idade)

 /* O nome continua como string e a idade passou a ser string,
 pois todo retorno de um prompt é uma string! */

 console.log(`olá meu nome é ${nome} e tenho ${idade} anos!`)