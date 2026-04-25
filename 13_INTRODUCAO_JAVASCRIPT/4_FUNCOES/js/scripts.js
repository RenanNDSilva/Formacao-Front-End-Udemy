// 1 - Criando uma função

function minhaFuncao() {
    console.log('Olá, mundo!');
}

// 2 - Chamando uma função

minhaFuncao();

// 3 - Função com parâmetros

function saudacao(nome) {
    console.log('Olá, ' + nome + '!');
}

saudacao('João');

// 4 - Função com retorno

function soma(a, b) {
    return a + b;
}

var resultado = soma(5, 3);
console.log('O resultado da soma é: ' + resultado);

// 5 - Escopo de variáveis

let global = 'Sou uma variável global';

function escopo() {
    var local = 'Sou uma variável local';
    console.log(local);
}

escopo(); // console.log(local); // Isso causará um erro, pois 'local' não está definido fora da função

console.log(global); // Isso funcionará, pois 'global' é uma variável global

// 6 - Escopo aninhado

function escopoAninhado() {
    let externa = 'Sou uma variável externa';
    function interna() {
        let interna = 'Sou uma variável interna';
        console.log(externa);
        console.log(interna);
    }
    interna();
}

escopoAninhado();

// 7 - Arrow functions

const arrowFunc = (x, y) => {
    return x * y;
}

const resultadoArrow = arrowFunc(4, 6);
console.log('O resultado da multiplicação é: ' + resultadoArrow);

const raizQuadrada = x => Math.sqrt(x);

console.log('A raiz quadrada de 16 é: ' + raizQuadrada(16));

// 8 - Função anônima

// setTimeout(function() {
//     console.log('Isso é uma função anônima executada após 2 segundos');
// }, 2000);

// 9 - Parametros opcionais

// function saudacaoOpcional(nome) {
//     if (!nome) {
//         nome = 'Visitante';
//         console.log('Olá, ' + nome + '!');
//         return;
//     } else {
//         console.log('Olá, ' + nome + '!');
//     }
// }

// saudacaoOpcional(); // Saída: Olá, Visitante!
// saudacaoOpcional('Maria'); // Saída: Olá, Maria!

// 10 - Parâmetros padrão

function saudacaoPadrao(nome = 'Visitante') {
    console.log('Olá, ' + nome + '!');
}

saudacaoPadrao(); // Saída: Olá, Visitante!
saudacaoPadrao('Carlos'); // Saída: Olá, Carlos!

// 11 - Closure

function contador() {
    let count = 0;
    return function () {
        count++;
        console.log('Contagem: ' + count);
    }
}

const meuContador = contador();
meuContador();

// 12 - Recursão

function contagemRegressiva(n) {
    if (n <= 0) {
        console.log('Fogo!');
        return;
    }   else {  
        console.log(n);
        contagemRegressiva(n - 1);
    }   
}

contagemRegressiva(5);