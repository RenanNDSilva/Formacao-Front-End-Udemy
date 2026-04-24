// 1 - Variáveis

let nome = "João";

console.log(nome);

const idade = 30;

console.log(idade);

// 2 - Prompt

// let nomeUsuario = prompt("Digite seu nome:");

// console.log("Olá, " + nomeUsuario + "!");

// 4 - Alert

// alert("Bem-vindo ao curso de JavaScript!");

// 5 - Math

console.log(Math.PI);

console.log(Math.max(10, 20, 5)); // Retorna o maior número entre os argumentos fornecidos

console.log(Math.min(10, 20, 5)); // Retorna o menor número entre os argumentos fornecidos

console.log(Math.round(4.7)); // Arredonda para o número inteiro mais próximo

console.log(Math.floor(4.7)); // Arredonda para baixo

console.log(Math.ceil(4.2)); // Arredonda para cima

// 6 - Console

console.log("Este é um log de informação.");

console.warn("Este é um aviso.");

console.error("Este é um erro.");

// 7 - Estruturas de Controle IF e ELSEIF

let idadeUsuario = 18;

if (idadeUsuario >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}

let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// 8 - Estrutura de Repetição FOR, WHILE e DO WHILE

for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

let contador = 0;

while (contador < 5) {
    console.log("Número: " + contador);
    contador++;
}

let contadorDoWhile = 0;

do {
    console.log("Número: " + contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile < 5);

// 9 - Estrutura Condional SWITCH

let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia da semana inválido");
}