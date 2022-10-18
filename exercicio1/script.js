function parte1() {
    const Name = prompt("Qual é o seu nome?");
    let age = prompt("Qual é a sua idade?");
    
    document.getElementById("name").innerHTML = `O nome é: ${Name}`;
    document.getElementById("age").innerHTML = `A idade é: ${age}`;
    
    console.log(`Olá ${Name}, você tem ${age} anos.`)
    
    // d) Foi impresso o valor undefined em ambas as variáveis porque não receberam nenhum valor e, por isso, não é possível identificar corretamente o tipo de cada uma.
    
    // f) O tipo de cada variavel foi alterada para string e number, respectivamente.
}

function parte2() {
    let favoriteMusicQuestion = "Qual sua música favorita?";
    let favoriteMusicAnswer = prompt(favoriteMusicQuestion);
    let favoriteFoodQuestion = "Qual sua comida favorita?";
    let favoriteFoodAnswer = prompt(favoriteFoodQuestion);
    let favoriteMovieQuestion = "Qual seu filme favorito?";
    let favoriteMovieAnswer = prompt(favoriteMovieQuestion);

    document.getElementById("music").innerHTML = `${favoriteMusicQuestion} - ${favoriteMusicAnswer}`;
    document.getElementById("food").innerHTML = `${favoriteFoodQuestion} - ${favoriteFoodAnswer}`;
    document.getElementById("movie").innerHTML = `${favoriteMovieQuestion} - ${favoriteMovieAnswer}`;

    console.log(`${favoriteMusicQuestion} - ${favoriteMusicAnswer}`)
    console.log(`${favoriteFoodQuestion} - ${favoriteFoodAnswer}`)
    console.log(`${favoriteMovieQuestion} - ${favoriteMovieAnswer}`)
}