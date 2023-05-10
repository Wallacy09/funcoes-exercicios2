// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

function numero(numero1, numero2) {

    let soma = numero1 + numero2

    console.log(soma);

}
numero(2,4)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

function numeroB(numero3, numero4) {

    let imprime = numero3 >= numero4


    console.log(imprime);

}

numeroB(7,5)

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function numeroC(numero5) {

    let booleano = numero5 % 2 === 0 
    
    console.log(`O número ${numero5} é um número par?:`, booleano)
}

numeroC(2)


// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const salario =(valor)=> {
    const desconto = (valor * 0.1)
    const liquido = valor - desconto

    console.log(`Salário bruto ${valor}, desconto de 10% ${liquido}`);

}

salario(2000.00)