// exercicio 3 aula 15-03

const nome = prompt("Qual seu nome completo?")
console.log(nome)
console.log(typeof nome)

const nasc = (prompt("Qual sua data de nascimento? DD/MM/AAAA"))
console.log(nasc)
console.log(typeof nasc)  
//Nao pude deixar number para pode usar as /, senao retorna NaN (not a number)  

const end = prompt("Qual seu endereço?")
console.log(end)
console.log(typeof end)

const cpf = Number ( prompt("Qual seu CPF?"))
console.log(cpf)
console.log(typeof cpf)  

let esco = (prompt("Qual sua escolaridade?")) 
console.log(esco)   
console.log(typeof esco)

const cnh = confirm("Você possui cnh? Ok para sim.")
console.log(cnh) 
console.log(typeof cnh)

let filho = Number ( prompt("Quantos filhos você tem?"))
console.log(filho)
console.log(typeof filho)

const cargo = prompt("Qual seu cargo atual?")
console.log(cargo)
console.log(typeof cargo)    

let salas = Number (prompt("Qual seu salario atual?"))
console.log(salas)
console.log(typeof salas)   

let comis = Number (prompt("Qual valor sua comissão? Se não recebe preencher o (zero)"))
console.log(comis)
console.log(typeof comis)

let anoCon = Number (prompt("Qual ano foi admitido na empresa?"))
    console.log(anoCon)
console.log(typeof anoCon)

console.log("----------------------------------")
console.log("Dados do(a) Funcionario(a)")
console.log("Nome:", nome, "Data de Nascimento:", nasc, "CPF:", cpf, "CNH?:", cnh)
console.log("Reside:", end, "escolaridade:", esco, "tem:", filho, "filhos")
console.log("A mesmo está conosco desde:", anoCon,". Atualmente ocupa o cargo de:", cargo,)
console.log("Rendimentos; Salario:",salas, ". Comissão:", comis,".")

