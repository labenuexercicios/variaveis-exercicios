let a = Number(prompt("Valor 1"));
let b = Number(prompt("Valor 2"));
let aux;

document.getElementById("A").innerHTML = `O valor de A é: ${a}`;
document.getElementById("B").innerHTML = `O valor de B é: ${b}`;

function trocar() {
    aux = a;
    a = b;
    b = aux;

    document.getElementById("A2").innerHTML = `O novo valor de A é: ${a}`;
    document.getElementById("B2").innerHTML = `O novo valor de B é: ${b}`;

    console.log(`O novo valor de A é: ${a}`)
    console.log(`O novo valor de B é: ${b}`)
}
