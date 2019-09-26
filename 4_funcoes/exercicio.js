//resposta aqui
const r = require('readline-sync')

soma = (v1, v2) => {
    return v1 + v2
}

multiplicacao = (v1, v2) => {
    return v1 * v2
}

divisao = (v1, v2) => {
    return v1 / v2;
}

substracao = (v1, v2) => {
    return v1 - v2;
}

const operacao = r.question('Qual operacao deseja fazer?');
const v1 = parseInt(r.question('Insira o primeiro valor'));
const v2 = parseInt(r.question('Insira o segundo valor'));
let res;

switch (operacao) {
    case 'soma':
        res = soma(v1, v2);
        console.log(res)
        break;
    case 'subtracao':
        res = substracao(v1, v2);
        console.log(res)
        break;
    case 'divisao':
        res = divisao(v1, v2);
        console.log(res)
        break;
    case 'multiplicacao':
        res = multiplicacao(v1, v2);
        console.log(res)
        break;
    default:
        console.log("Operação inválida")
}