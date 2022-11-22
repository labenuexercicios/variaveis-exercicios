let nome
console.log(typeof nome);
let idade  
console.log(typeof idade)


let mensagem1 = 'oi, diga seu nome';
nome= prompt( mensagem1)
 idade = prompt(`oi ${nome} e qual e sua idader?`)
window.nome
window.idade
confirm(`Certo ${nome}, entao voce tem ${idade} anos`)

console.log( typeof nome);
console.log(typeof idade)


let perguntaA = prompt('voce vai torcer para o Brasil na copa?')
let respostaA = `${perguntaA}`
window.perguntaA
console.log(respostaA);



let perguntaB = prompt('voce e brasileirx?')
let respostaB = `${perguntaB}`
window.perguntaB
 console.log(respostaB);

let perguntaC = prompt('voce acha que brasil ganha a copa?');
let respostaC = `${perguntaC}`

window.perguntaC;
console.log(respostaC)



document.addEventListener('DOMContentLoaded', ()=>{
    let revela1 = document.getElementById('card1');
    let revela2 = document.getElementById('card2');
    let revela3 = document.getElementById('card3');
    revela1.innerHTML += `
    <h3> ${nome}</h3>
    <p class="resposta">Sua torcida vai ${respostaA}</p> para Brasil`;
    revela2.innerHTML += `<h3> ademas de sua idade ser ${idade} sua idade</h3>
    <p class="resposta">e sua  NACIONALIDADE ${respostaB} E BRAZUCA</p>`;
    revela3.innerHTML += `
    <h3>TE REVELO</h3>
    <p class="resposta"><strong>Brasil ganha a cada 12 anos</strong> voce acha 
    que BR ${respostaC} ganha a copa mas te conto</p>
    <h2>PINTOU O HEXA EN QUATAR!</h2>`
    ;

})