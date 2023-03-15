/*
    Crie um programa que recebe o nome e a idade 
    de três pessoas diferentes.
    Calcule a média das idades e exiba-a como no exemplo abaixo:
    A média de idade de pessoa1, pessoa2 e pessoa3 é 20 anos.
*/

let entrada = require('prompt-sync')(); 

let nome1 = entrada('Digite o 1º nome: '); 
let idade1 = parseInt(entrada('Digite a idade: ')); 

let nome2 = entrada('Digite o 2º nome: '); 
let idade2 = parseInt(entrada('Digite a idade: ')); 

let nome3 = entrada('Digite o 3º nome: '); 
let idade3 = parseInt(entrada('Digite a idade: ')); 

let soma = idade1 + idade2 + idade3; 
let media = soma / 3;

console.log('A média de idade de ' + nome1 + ', ' + 
nome2 + ' e ' + nome3 + ' é ' + media.toFixed(1) + ' ano(s)');