//**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

//const nome =''

//**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

//const idade =''

//**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

//console.log(typeof nome,typeof idade)

    // ele retornou apenas o tipo da variavel, sendo ambas string

 //**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    const nome = prompt ('Qual é o seu nome ?')

    const idade = +prompt ('Qual é a sua idade ?')

    //**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    console.log(
        typeof nome,
        typeof idade
        )

    // agora ele retornou o tipos string para o nome e number para a idade, pois eu setei o codigo para retornar como number.

    //**g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

    console.log('Olá',nome,'você tem',idade,'anos.Onde',nome,'e',idade,'são os valores que o usuario inseriu')