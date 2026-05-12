// 1 - Debugger

// n1 = 10;
// n2 = 20;

// function sum(a, b) {
//     return a + b;
// }

// result = sum(n1, n2);
// console.log(result);

// debugger;

// if (result > 20) {
//     console.log("O resultado é maior que 20.");
// }

// debugger;

// 2 - Tratamento de erros

// function checkNumber(num) {
//     const number = Number(num);

//     if (isNaN(number)) {
//         console.error("O valor inserido não é um número.");
//         return;
//     }
//     console.log(`O número inserido é: ${number}`);

// }

// checkNumber("abc");
// checkNumber("123");

// 3 - Exceções

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Divisão por zero não é permitida.");
//     }
//     return a / b;
// }

// try {
//     const result = divide(10, 2);
//     console.log(result);
// } catch (error) {
//     console.error("Ocorreu um erro: " + error.message);
// }

// 4 - Finally

// function readFile(filePath) {
//     try {
//         // Simulando a leitura de um arquivo
//         console.log(`Lendo o arquivo: ${filePath}`);
//     } catch (error) {
//         console.error("Ocorreu um erro ao ler o arquivo: " + error.message);
//     } finally {
//         console.log("Operação de leitura de arquivo concluída.");
//     }
// }

// readFile("caminho/para/arquivo.txt");

// 5 - Assertions

// function assert(condition, message) {
//     if (!condition) {
//         throw new Error(message || "Assertion failed");
//     }
// }

// try {
//     const value = 5;
//     assert(value > 10, "O valor deve ser maior que 10.");
// } catch (error) {
//     console.error("Assertion error: " + error.message);
// }

// ==================== EXERCÍCIOS ====================

// EXERCÍCIO 1 - Debugger (1/2)
// TODO: Crie uma função de multiplicação e use debugger para inspecionar os valores.

// function multiplicar(a, b) {
//     // debugger; // Inspecionar os valores de a e b
//     return a * b;
// }

// const resultado = multiplicar(5, 3);
// console.log(`O resultado da multiplicação é: ${resultado}`);

// EXERCÍCIO 2 - Debugger (2/2)
// TODO: Crie uma função de fatorial e use debugger dentro do loop.

// function fatorial(n) {
//     if (n < 0) {
//         return "Fatorial não definido para números negativos.";
//     }
//     let resultado = 1;
//     for (let i = 1; i <= n; i++) {
//         // debugger; // Inspecionar o valor de i e resultado a cada iteração
//         resultado *= i;
//     }
//     return resultado;
// }

// const fatorialDe5 = fatorial(5);
// console.log(`O fatorial de 5 é: ${fatorialDe5}`);

// EXERCÍCIO 3 - Tratamento de Erros (1/2)
// TODO: Crie uma função que valide se um email é válido.

function validarEmail(email) {
    if (typeof email !== "string") {
        console.error("O valor inserido não é uma string.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        console.error("O email inserido não é válido.");
        return;
    }
    console.log("O email inserido é válido.");
}

validarEmail("user@example.com");

// EXERCÍCIO 4 - Tratamento de Erros (2/2)
// TODO: Crie uma função que converta string para número e valide se é positivo.

function converterParaNumero(str) {
    const numero = Number(str);

    if (isNaN(numero)) {
        console.error("O valor inserido não é um número.");
        return;
    }
    if (numero < 0) {
        console.error("O número inserido não é positivo.");
        return;
    }
    console.log(`O número inserido é: ${numero}.`);
}

converterParaNumero("21");

// EXERCÍCIO 5 - Exceções (1/2)
// TODO: Crie uma função que calcule raiz quadrada e lance erro se o número for negativo.

function calcularRaizQuadrada(num) {
    if (num < 0) {
        throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
    }
    return Math.sqrt(num);
}

try {
    const resultado = calcularRaizQuadrada(2);
    console.log(`A raiz quadrada é: ${resultado}`);
} catch (error) {
    console.error("Ocorreu um erro: " + error.message);
}



// EXERCÍCIO 6 - Exceções (2/2)
// TODO: Crie uma função que acesse um índice de array e lance erro se ele for inválido.

function acessarIndiceArray(array, index) {
    if (index < 0 || index >= array.length) {
        throw new Error("Índice inválido.");
    }
    return array[index];
}

try {
    const Array = [1, 2, 3];
    const valor = acessarIndiceArray(Array, 2);
    console.log(`O valor no índice 2 é: ${valor}`);
} catch (error) {
    console.error("Ocorreu um erro: " + error.message);
}

// EXERCÍCIO 7 - Finally (1/2)
// TODO: Crie uma função de login e use finally para registrar a tentativa.

function login(username, password) {
    try {
        if (username === "admin" && password === "password") {
            console.log("Login bem-sucedido!");
        } else {
            throw new Error("Credenciais inválidas.");
        }
    } catch (error) {
        console.error("Ocorreu um erro: " + error.message);
    } finally {
        console.log("Tentativa de login finalizada.");
    }
}

login("aAdmin", "password");

// EXERCÍCIO 8 - Finally (2/2)
// TODO: Crie uma função de download e use finally para fechar a conexão.

function downloadArquivo(url) {
    try {
        console.log(`Iniciando download do arquivo: ${url}`);
        // Simulando um erro de download
        throw new Error("Erro ao baixar o arquivo.");
    } catch (error) {
        console.error("Ocorreu um erro: " + error.message);
    } finally {
        console.log("Conexão de download fechada.");
    }
}
downloadArquivo("https://example.com/arquivo.zip");

// EXERCÍCIO 9 - Assertions (1/2)
// TODO: Crie uma função que valide se a idade é maior ou igual a 18.

function validarIdade(idade) {
    if (typeof idade !== "number") {
        throw new Error("A idade deve ser um número.");
    }
    if (idade < 18) {
        throw new Error("A idade deve ser maior ou igual a 18.");
    }
}

try {
    validarIdade(20);
    console.log("Idade válida.");
} catch (error) {
    console.error("Assertion error: " + error.message);
}

// EXERCÍCIO 10 - Assertions (2/2)
// TODO: Crie uma função que calcule salário final usando assertions para validar entradas.

function calcularSalarioFinal(salarioBase, bonus) {
    if (typeof salarioBase !== "number" || typeof bonus !== "number") {
        throw new Error("Salário base e bônus devem ser números.");
    }
    if (salarioBase < 0 || bonus < 0) {
        throw new Error("Salário base e bônus devem ser valores positivos.");
    }
    return salarioBase + bonus;
}

try {
    const salarioFinal = calcularSalarioFinal(3000, 500);
    console.log(`O salário final é: ${salarioFinal}`);
} catch (error) {
    console.error("Assertion error: " + error.message);
}
