// 1 - Tipo de dados Number

console.log(typeof 10);
console.log(typeof -10);
console.log(typeof 1.0);

// 2 - Operadores Aritméticos

console.log(10 + 5); // Adição
console.log(10 - 5); // Subtração
console.log(10 * 5); // Multiplicação
console.log(10 / 5); // Divisão
console.log(10 % 3); // Resto da divisão
console.log(10 ** 2); // Exponenciação

// 3 - Numeros especiais

console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log(0 / 0); // NaN (Not a Number)

// 4 - Strings

console.log(typeof "Hello, World!");
console.log(typeof 'JavaScript');
console.log(typeof `Template Literals`);

// 5 - Caracteres especiais em strings

console.log("Linha 1\nLinha 2");
console.log("Tab \t Espaço");
console.log("Aspas simples: \' e aspas duplas: \"");
console.log("Barra invertida: \\");

// 6 - Concatenação de strings

console.log("Hello, " + "World!");

// 7 - Interpolação de strings (Template Literals)

const name = "Alice";
console.log(`Hello, ${name}!`);

// 8 - Booleanos

console.log(typeof true);
console.log(typeof false);

// 9 - Operadores de comparação

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");

// 10 - Operadores lógicos

console.log(true && false); // AND 
console.log(true || false); // OR
console.log(!true); // NOT

console.log((10 > 5) && (5 > 3)); // true
console.log((10 > 5) || (5 < 3)); // true
console.log(!(10 > 5)); // false

// 11 - Empty values

console.log(typeof null);
console.log(typeof undefined);
