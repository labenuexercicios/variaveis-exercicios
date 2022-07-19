//a) Crie três novas variáveis, contendo as respostas;

const teclado = prompt ('Você utiliza seu teclado ?')
const brilha = prompt ('Ele tem led ?')
const mecanico = prompt ('É mecanico ?')

//b) Imprima na tela todas as respostas. Por exemplo:

console.log(teclado)
console.log(brilha)
console.log(mecanico)

//c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de **prompt** deve mudar um pouco, como mostrado abaixo:

const tecladoP = "Você utiliza seu teclado ?"
const tecladoR = prompt(tecladoP)

const brilhaP = "Ele tem led ?"
const brilhaR = prompt (brilhaP)

const mecanicoP = "É mecanico ?"
const mecanicoR = prompt (mecanicoP)

//d) Altere seu programa, para que a impressão das respostas também tenha as **perguntas**. Por exemplo:

console.log('Você utiliza teclado ? - ',tecladoR)
    console.log('Ele tem led ? -',brilhaR)
    console.log('É mecanico ? -',mecanicoR)
    