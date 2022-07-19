const perguntaA = "Você é alergico a camarão?";
let alergia = prompt (perguntaA);
const perguntaB = "Você mora no sudeste do Brasil?";
let sudeste = prompt (perguntaB);
const perguntaC = "Você é casado?";
let casado = prompt (perguntaC);


/* pelo que eu entendi do que foi pedido
devo agora abrir 3 novas variáveis 
e nelas atribuir o que foi dado de resposta no prompt
mesmo essa informação já estando nas variáveis: alergia, sudeste e casado
não sei se entendi errado o que foi solicitado
me parece desnecessário abrir essas novas 3 variáveis */

let camarao = alergia;
let regiao = sudeste;
let estadoCivil = casado;

console.log (perguntaA,"-", camarao);
console.log (perguntaB,"-", sudeste);
console.log (perguntaC,"-", estadoCivil);

