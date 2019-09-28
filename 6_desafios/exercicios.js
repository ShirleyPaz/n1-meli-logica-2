// Para praticar:
// 1 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa para printar todos os números pares de 1 a 100.
// - Números pares são todos os números que dividos por 2 tem resto 0
// - Qual operador que retorna o resto da divisão? Vamos usar ele!

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 2 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
// - Você pode concatenar uma string usando: + ou +=

// const r = require('readline-sync');

// const num = Number(r.question('Digite um número'));

// i = 1;
// let text = '';
// while (i <= num) {
//     text += '*';
//     i++;
//     console.log(text);
// }


// // 3- Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
// // Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
// // O programa vai dizer "Tchau [nome]" e finalizar o programa.

// let nome = r.question('Digite o seu nome');
// let input = r.question("Digite um comando ou 'tchau' para finalizar o programa.")

// do {
//     console.log(input)
//     input = r.question("Digite um comando ou 'tchau' para finalizar o programa.");
// } while (input != 'tchau');
// console.log(`Tchau, ${nome}`);


// 4 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um  programa contador 
// de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
// A meta a ser atingida é de 500 passos.

// let passos = 0;
// let passosUsuario = 0;

// while(passos <= 500) {
//     passosUsuario = Number(r.question('Quantos passos você deu hoje?'));
//     passos += passosUsuario;
// }
// console.log(`Pronto! Você já completou ${passos} passos`)

// 5 - Crie um programa que conte de 10 até 1 de 1 em 1.

// let num = 10;

// do {
//     console.log(num)
//     num -= 1
// } while (num > 0);

// 6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
//     - Printe o maior;
//     - Printe o menor.


const arr = [-4, -10, -18, -59, -72, -5];

// console.log(`menor número é ${arr.sort((a, b) => a > b ? 1 : -1)[0]}`);
// console.log(`maior número é ${arr.sort((a, b) => a < b ? 1 : -1)[0]}`);

let i = 0;
let maior = -Infinity;
let menor = +Infinity;

while (i <= 5) {
    if (arr[i] < maior) {
        i++;
    } else {
        maior = arr[i];
        i++;
    }
}

console.log(maior);

i = 0

while (i <= 5) {
    if (arr[i] > menor) {
        i++;
    } else {
        menor = arr[i];
        i++;
    }
}

console.log(menor);




