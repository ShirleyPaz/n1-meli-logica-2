//resposta aqui

let nome = prompt('Insira o nome do cliente');
let idade = prompt('insira a idade do cliente');
let primeiraVez = prompt('É a primeira compra?');
let favoritos = [];

let i = 0;   

while( i < 3 ) {
    let favorito = promp('Insira um produto favorito');
    favoritos.push(favorito);
    i++
};


let cliente = {
    nome: nome,
    idade: idade, 
    primeiraVez: primeiraVez == 'sim' ? true : false,
    favoritos: favoritos
}

console.log(cliente, 'cliente')