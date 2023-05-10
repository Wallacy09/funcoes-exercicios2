// a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.
    function meuNome(nome) {

    console.log(`Olá, ${nome}`);
    }
    meuNome("wallacy")

    // b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
    function tabuada1(numero){
        
       console.log(`Tabuada do número:`, numero,":", numero*0, numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10);

    }
    tabuada1(1)
    tabuada1(2)
    tabuada1(3)
    tabuada1(4)
    tabuada1(5)
    tabuada1(6)
    tabuada1(7)
    tabuada1(8)
    tabuada1(9)
    tabuada1(10)

 
    // c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions

 const tabuada2 = numero => {
        
    console.log(`Tabuada do número:`, numero,":", numero*0, numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10)

    }
tabuada2(1)
tabuada2(2)
tabuada2(3)
tabuada2(4)
tabuada2(5)
tabuada2(6)
tabuada2(7)
tabuada2(8)
tabuada2(9)
tabuada2(10)