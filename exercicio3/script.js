// 1
let nomeCompleto = prompt('Nome Completo')
let dataDeNascimento = prompt('Data de nascimento')
let endereco = prompt('Digite seu Endereço')
let cpf = prompt('Digite seu cpf')
let escolaridade = prompt('Qual sua escolaridade?')
let possuiCnh = confirm('Possui CNH')
let quantosFilhosPossui = prompt('Quantos filhos possui?')
let cargoAtual = prompt('Qual seu cargo atual?')
let salario = Number (prompt('Qual o seu salario'))
let comissao = Number (prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero'))
let anoDeAdmissao = Number (prompt ('Informe o ano de admissão'))

console.log (typeof nomeCompleto, typeof dataDeNascimento, typeof endereco,
    typeof cpf, typeof escolaridade, typeof possuiCnh, typeof quantosFilhosPossui,
    typeof cargoAtual, typeof salario, typeof comissao, typeof anoDeAdmissao)

// imprimir um relatorio


console.log (`
        nomeCompleto:${nomeCompleto}
        dataDeNascimento: ${dataDeNascimento}
        endereço: ${endereco}
        cpf: ${cpf}
        escolaridade: ${escolaridade}
        possuiCnh: ${possuiCnh}
        quantosFilhosPossui: ${quantosFilhosPossui}
        cargoAtual: ${cargoAtual}
        salario: ${salario}
        comissao: ${comissao}
        anoDeAdmissao: ${anoDeAdmissao}
        `)


