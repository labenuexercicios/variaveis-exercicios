// comentario em linha

/* comentario 
                em 
                            bloco */

console.log ("HELLO !");

/* const nome = prompt ("Qual seu Nome ?"); */
/*console.log(nome);*/

/* const nome = "Anderson";
const adress = "Dublin";
let idade = 20;
    idade = 29;
 */
/* let temPet = true;
    temPet = false;

    console.log("Hello!, my name is ", nome, "and i'am ", idade,"years old.", "I live in ", adress,);
    console.log("tem pet ?", temPet); */

/* let temPet = true;
const nomePet = "Thor";

console.log("Do I have a pet? ",temPet, "What is it's name? ", nomePet); */

/* let temPet = false;
const nomePet = null;
console.log(nomePet); */

/* console.log(typeof nome);
console.log(typeof idade);
console.log(typeof adress);
console.log(typeof temPet);
console.log(typeof nomePet);

let preco = 4.00;
console.log(preco);
preco = "string";
console.log(preco); */


/* comando prompt sempre devolve como string*/
/* const nome = prompt ("What is your name ?");
let idade = Number(prompt ("How old are you ?"));
let valorConvertido = idade.toString();



console.log("name: ",nome, ", Age: ",idade);
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof valorConvertido); */

const nome = prompt ("Digite seu nome ?");
const nasc = prompt ("Digite sua data de nascimento (dd/mm/aaaa)");
const end = prompt ("Digite seu endereco");
const cpf = prompt ("Digite seu CPF");
const esco = prompt ("Informe seu grau de escolaridade");
const cnh = prompt ("Digite sua CNH");
let filhos = Number(prompt ("Quantos filhos possui")) ;
let cargo = prompt ("Qual seu cargo atual ?");
let salario = Number(prompt ("Informe o valor do seu salario atual ?"));
let comi = Number(prompt ("Informe sua porcentagem de comissao se receber ou digite 0 ?"));
const admi = prompt ("Informe o ano de admissao ?");

console.log(typeof nome);
console.log(typeof nasc);
console.log(typeof end);
console.log(typeof cpf);
console.log(typeof esco);
console.log(typeof cnh);
console.log(typeof filhos);
console.log(typeof cargo);
console.log(typeof salario);
console.log(typeof comi);
console.log(typeof admi);

console.log(`Relatorio do funcionario ${nome}`, `, Data de nascimento: ${nasc}`);
console.log(`Endereco: ${end}`,`, Portador do CPF: ${cpf}`,`, Grau de escolaridade: ${esco}`);
console.log(`Portador da CNH: ${cnh}`,`, Possui ${filhos} filhos`, `, Atualmente trabalha como ${cargo}`);
console.log(`Salario atual R$${salario}`,`, Recebe ${comi}% de comissao`, `, Foi admitido no ano de ${admi}`);


