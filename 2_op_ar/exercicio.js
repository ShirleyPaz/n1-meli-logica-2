var rl = require('readline-sync')
var produtos = [
    {
        nome: 'camiseta',
        valor: 35
    },
    {
        nome: 'bermuda',
        valor: 50
    },

    {
        nome: 'boné',
        valor: 20
    },
]

var posicao = parseInt(rl.question('Digite a posição do produto (0 a 2)'));
var desconto = parseInt(rl.question('Digite o desconto'));
var produtoEscolhido = produtos[posicao];
var precoFinal = produtoEscolhido.valor * desconto/100 
var mensagem = `Produto ${produtoEscolhido.nome} com desconto é R$${precoFinal.toFixed(2)}`

console.log(mensagem)
