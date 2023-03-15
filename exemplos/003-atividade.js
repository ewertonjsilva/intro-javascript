// Crie um programa que receba seu nome e sua idade
// e apresente na saída qual será sua idade daqui
// a 25 anos
// Saída - "Ewerton daqui a 25 anos sua idade será 50" 

let entrada = require('prompt-sync')(); 
let nome = entrada('Digite seu nome: '); 
let idade = parseInt(entrada('Digite sua idade: ')); 

let idade25 = idade + 25; 

console.log(nome + ' daqui a 25 anos sua idade será: ' + idade25);
