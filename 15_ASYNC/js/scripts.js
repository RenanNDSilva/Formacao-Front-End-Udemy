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

const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;
    setTimeout(() => {
        if (sucesso) {
            resolve("A operação foi bem-sucedida!");
        } else {
            reject(new Error("A operação falhou."));
        }
    }, 2000);
});

minhaPromise
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((error) => {
        console.error("Erro: " + error.message);
    }); 


