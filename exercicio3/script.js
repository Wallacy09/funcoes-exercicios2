// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
const soma = (soma1,soma2) => {

    const operacaoDeSoma = numero + numero2

    return `A soma entre ${soma1} + ${soma2} = ${operacaoDeSoma}`
}

const subtracao = (subtracao1,subtracao2) => {

    const operacaoDeSubtracao = numero - numero2

    return `A subtracao entre ${subtracao1} - ${subtracao2} = ${operacaoDeSubtracao}`
}

const divisao = (divisao1,divisao2) => {

    const operacaoDeDivisao = numero / numero2

    return `A divisao entre ${divisao1} / ${divisao2} = ${operacaoDeDivisao}`
}

const multiplicacao = (multiplicacao1,multiplicacao2) => {

    const operacaoDeMultiplicacao = numero * numero2

    return `A multiplicação entre ${multiplicacao1} * ${multiplicacao2} = ${operacaoDeMultiplicacao}`
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let numero = Number(prompt("Digite um número"))

let numero2 = Number(prompt("Digite um número"))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

soma(numero,numero2)
subtracao(numero,numero2)
divisao(numero,numero2)
multiplicacao(numero,numero2)


// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

let resultado = soma(numero,numero2)
let resultado2 = subtracao(numero,numero2)
let resultado3 = divisao(numero,numero2)
let resultado4 = multiplicacao(numero, numero2)


console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);