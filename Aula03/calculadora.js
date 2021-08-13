let soma = require('./soma');
let subtracao = require('./subtracao');
let multiplicar = require('./multiplicacao');
let divisao = require('./divisao');

function calcular(a, b, operacao) {
    let resultado;

    if (operacao == '+') {
        resultado = soma(a,b);
    }
    if (operacao == '-') {
        resultado = subtracao(a,b);        
    }
    if (operacao == '*') {
        resultado = multiplicar(a,b);        
    }
    if (operacao == '/') {
        resultado = divisao(a,b);        
    }
    console.log(resultado);
}

calcular(4, 10, '+');
calcular(8, 20, '-');
calcular(9, 40, '*');
calcular(6, 30, '/');
calcular(0, 30, '/');