let nome = "";
let idade = "";

console.log(typeof nome, typeof idade) //String, String
//mostra como se comporta o typeof sem converter para numeros

let nome2 ; // undefined
let idade2 ; //undefined

console.log(typeof nome2, typeof idade2)
//mostra como se comporta o typeof sem declarar variaveis


let nome3 = prompt("Qual o seu nome? ");
let idade3 = Number(prompt("Qual a sua idade? "));

console.log(`Meu nome é `, nome3, `e tenho `, idade3, `anos`); 

console.log(typeof nome3, typeof idade3); //String, Number
//mostra como se comporta o typeof convertendo string para numeros
