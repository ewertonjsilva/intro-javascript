/*
  Crie um programa baseado no exemplo 12 que 
  exiba a mensagem "Bem vindo" caso o usuário 
  digite a senha corretamente e "Usuário Bloqueado" 
  caso o usuário erre a senha 3 vezes.
*/


const entrada = require('prompt-sync')(); 

const senha = '1357908642';
let senhaDigitada = '';
let erros = -1;

do {
    erros++;

    if (erros >= 3) {
      break;
    }

    senhaDigitada = entrada('Digite sua senha para entrar! ');
} while (senha != senhaDigitada);

if (erros < 3) {
  console.log('Você acessou o sistema!');
} else {
  console.log('Você errou a senha 3 vezes, seu acesso foi bloqueado!');
}