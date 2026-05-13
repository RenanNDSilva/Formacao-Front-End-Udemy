// 1 - SetTimeout

// console.log("Início do processo.");

// setTimeout(() => {
//     console.log("Processo assíncrono concluído.");
// }, 2000);

// console.log("Fim do processo.");

// 2 - SetInterval

// let count = 0;

// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Contagem: ${count}`);
//     if (count >= 5) {
//         clearInterval(intervalId);
//         console.log("Contagem concluída.");
//     }
// }, 1000);

// 3 - Promises

// const minhaPromise = new Promise((resolve, reject) => {
//     const sucesso = true;
//     setTimeout(() => {
//         if (sucesso) {
//             resolve("A operação foi bem-sucedida!");
//         } else {
//             reject(new Error("A operação falhou."));
//         }
//     }, 2000);
// });

// minhaPromise
//     .then((mensagem) => {
//         console.log(mensagem);
//     })
//     .catch((error) => {
//         console.error("Erro: " + error.message);
//     }); 

// 3.1 - Falha na Promise

// const minhaPromiseFalha = new Promise((resolve, reject) => {
//     const sucesso = false;
//     setTimeout(() => {
//         if (sucesso) {
//             resolve("A operação foi bem-sucedida!");
//         } else {
//             reject(new Error("A operação falhou."));
//         }
//     }, 2000);
// });

// minhaPromiseFalha
//     .then((mensagem) => {
//         console.log(mensagem);
//     })
//     .catch((error) => {
//         console.error("Erro: " + error.message);
//     }); 

// 3.2 - Rejeição de Promise

// const minhaPromiseRejeitada = new Promise((resolve, reject) => {
//     reject(new Error("A operação foi rejeitada."));
// });

// minhaPromiseRejeitada
//     .then((mensagem) => {
//         console.log(mensagem);
//     })
//     .catch((error) => {
//         console.error("Erro: " + error.message);
//     });

// 4 - Async / Await

async function somarComDelay(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

async function calcular() {
    console.log("Iniciando cálculo...");
    const resultado = await somarComDelay(5, 10);
    console.log("Resultado: " + resultado);
}

calcular();

// 5 - Generators

function* contador() {
    let count = 0;
    while (true) {
        yield count;
        count++;
    }
}

const meuContador = contador();
console.log(meuContador.next().value);
