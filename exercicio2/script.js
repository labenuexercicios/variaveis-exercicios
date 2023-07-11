const pergunta1 = "Qual seu nomme?"
const pergunta2 = "Qual sua cor favorita??"
const pergunta3 = "qual estado você nasceu?"


const userName = prompt(pergunta1)

console.log(userName)

console.log(typeof userName)

//////////

let color = prompt(pergunta2)

console.log(color)

console.log(typeof color)

////////////////

const estado = prompt(pergunta3)

console.log(estado)

console.log(typeof estado)

//**g)** Para finalizar, imprima na tela a mensagem: "Olá, `nome`,  você tem `idade` anos". Lembre-se: `nome` e `idade` são os valores inseridos pelo usuário.

console.log("Olá ", userName,", sua cor favorita é ", color," e você nasceu em:",estado,".")