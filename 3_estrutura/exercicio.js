//resposta aqui
const r = require('readline-sync')

var produtos = [
    {
        nome: 'Nescau',
        tempoDeValidade: 200, //indicando que a validade dele é de 200 dias
        congelado: false
    },
    {
        nome: 'Geléia',
        tempoDeValidade: 100, //indicando que a validade dele é de 200 dias
        congelado: false
    },
    {
        nome: 'Frango',
        tempoDeValidade: 90, //indicando que a validade dele é de 200 dias
        congelado: true
    },
    {
        nome: 'Peixe',
        tempoDeValidade: 30, //indicando que a validade dele é de 200 dias
        congelado: true
    }
];

const posicao = parseInt(r.question('Escolha um produto entre 0 e 3'));
const diasVencimento = parseInt(r.question('Digite quantos dias faltam para vencer:'));

const porcentagem = (diasVencimento * 100) / produtos[posicao].tempoDeValidade;
const produto = produtos[posicao];

if (porcentagem <= 2) {
    console.log("Descartar produto, muito proximo de vencer")
} else if (porcentagem <= 10 && !produto.congelado) {
    console.log('Desconto!  Produto não congelado e próximo da validade.')
} else if (porcentagem <= 5 && produto.congelado) {
    console.log('Desconto!  Produto congelado e próximo da validade.')
} else if (porcentagem > 10) {
    console.log('Produto longe do vencimento.');
} else {
    console.log('Algo de errado não está certo')
}