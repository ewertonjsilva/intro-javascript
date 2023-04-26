/*
    Crie um programa que receba duas notas
    calcule a média entre elas e apresente
    o texto aprovado caso a média seja >= 7
    e reprovado caso seja menor.
    A notas digitadas devem estar entre 0 e 10!
*/

const entrada = require('prompt-sync')(); 

let notaTxt = '0.00';

notaTxt = entrada('Digite a 1ª nota: '); 
const nota1 = parseFloat(notaTxt);

notaTxt = entrada('Digite a 2ª nota: '); 
const nota2 = parseFloat(notaTxt);

const media = (nota1 + nota2) / 2; 


if (media < 0 || media > 10 || isNaN(media)) {
    if (media < 0) console.log('A nota não pode ser menor que 0!');
    if (media > 10) console.log('A nota não pode ser maior que 10!');
    if (isNaN(media)) console.log('O valor deve ser numérico!');
} else {
    if (media >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}