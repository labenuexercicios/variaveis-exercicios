let nome 
let idade 

console.log("A variavel nome é do tipo", typeof nome, "A variavel idade é do tipo", typeof idade) 
// As variaveis foram declaradas como undefined por não terem um valor definido

const nomeDoUsuario = prompt("Qual é o seu nome?")
let idadeDoUsuario = prompt("Qual é a sua idade?")

nome = nomeDoUsuario
idade = idadeDoUsuario

console.log("A variavel nome é do tipo", typeof nome, "A variavel idade é do tipo", typeof idade)
// As variaveis foram declaradas como String devido ao fato do prompt SEMPRE retornar uma String

console.log("Ola", nome, "você tem", idade, "anos")

// Parte 2

let endereco = prompt("Onde você mora?")
let corFavorita = prompt("Qual sua cor favorita?")
let profissao = prompt("Qual sua profissão?")

let enderecoDoUsuario = endereco
let corFavoritaDoUsuario = corFavorita
let profissaoDoUsuario = profissao

console.log("Eu moro em", enderecoDoUsuario)
console.log("Minha cor favorita é", corFavoritaDoUsuario)
console.log("Eu sou", profissaoDoUsuario)

const seuEndereco = "Onde você mora?"
const suaCorFavorita = "Qual sua cor favorita?"
const suaProfissao = "Qual a sua profissão?"

endereco = prompt(seuEndereco)
corFavorita = prompt(suaCorFavorita)
profissao = prompt(suaProfissao)

console.log(seuEndereco, endereco)
console.log(suaCorFavorita, corFavorita)
console.log(suaProfissao, profissao)