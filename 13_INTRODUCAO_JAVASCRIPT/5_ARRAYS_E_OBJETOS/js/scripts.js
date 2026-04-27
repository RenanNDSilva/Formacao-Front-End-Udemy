// 1 - Arrays

// let frutas = ['Banana', 'Maçã', 'Uva'];
// console.log(frutas);

// // 2 - Propriedades e métodos de arrays

// console.log(frutas.length); // Propriedade length
// console.log(frutas[0]); // Acessando o primeiro elemento do array
// frutas.push('Laranja'); // Adicionando um elemento ao final do array
// console.log(frutas);
// frutas.pop(); // Removendo o último elemento do array
// console.log(frutas);
// frutas.unshift('Abacaxi'); // Adicionando um elemento ao início do array
// console.log(frutas);
// frutas.shift(); // Removendo o primeiro elemento do array
// console.log(frutas);
// console.log(frutas.indexOf('Maçã')); // Encontrando o índice de um elemento no array
// console.log(frutas.includes('Uva')); // Verificando se um elemento existe no array

// const numeros = [1, 2, 3, 4, 5];
// const outrosNumeros = [6, 7, 8, 9, 10];
// const todosNumeros = numeros.concat(outrosNumeros); // Concatenando dois arrays
// console.log(todosNumeros);

// const numerosEmString = numeros.join(', '); // Convertendo um array em uma string
// console.log(numerosEmString);

// const numerosSeparados = numerosEmString.split(', '); // Convertendo uma string em um array
// console.log(numerosSeparados);

// const numerosInvertidos = numeros.reverse(); // Invertendo a ordem dos elementos do array
// console.log(numerosInvertidos);

// const numerosOrdenados = numeros.sort(); // Ordenando os elementos do array
// console.log(numerosOrdenados);

// let texto = '   Olá, mundo!   ';
// console.log(texto);
// let textoTrimmed = texto.trim(); // O método trim remove os espaços em branco do início e do fim da string
// console.log(textoTrimmed);

// let numero = '5';
// let numeroPadStart = numero.padStart(3, '0'); // O método padStart adiciona caracteres no início da string até que ela atinja o comprimento especificado
// console.log(numeroPadStart);
// let numeroPadEnd = numero.padEnd(3, '0');
// console.log(numeroPadEnd); // O método padEnd adiciona caracteres no final da string até que ela atinja o comprimento especificado

// let nome = 'Renan ';
// console.log(nome.repeat(3)); // O método repeat repete a string um número especificado de vezes

// // 5 - Objetos

// let pessoa = {
//     nome: 'Renan',
//     idade: 30,
//     profissao: 'Desenvolvedor',
//     hobbies: ['Programar', 'Viajar', 'Cozinhar']
// };

// console.log(pessoa);
// console.log(pessoa.nome);
// pessoa.idade = 31; // Modificando uma propriedade do objeto
// console.log(pessoa.idade);
// pessoa.endereco = 'Rua das Flores, 123'; // Adicionando uma nova propriedade ao objeto
// console.log(pessoa.endereco);
// delete pessoa.profissao; // Removendo uma propriedade do objeto
// console.log(pessoa);
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa)); // Retorna um array de arrays contendo as chaves e valores do objeto

// let carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2020,
//     cor: 'Prata'
// };

// let carro2 = {
//     marca: 'Honda',
//     modelo: 'Civic',
//     ano: 2019,
//     cor: 'Preto'
// };

// Object.assign(carro, carro2); // Copiando as propriedades de um objeto para outro
// console.log(carro);
// console.log(carro2);

// // 6 - Mutacão de objetos

// let pessoa1 = {
//     nome: 'Alice',
//     idade: 25
// };

// let pessoa2 = pessoa1; // Atribuição por referência
// pessoa2.nome = 'Bob';
// console.log(pessoa1.nome); // O nome de pessoa1 também é alterado, pois ambos apontam para o mesmo objeto

// // 7 - Loop em arrays 

// let frutas2 = ['Banana', 'Maçã', 'Uva', 'Melancia', 'Abacaxi'];

// for (let i = 0; i < frutas2.length; i++) {
//     console.log(frutas2[i]);
// }

// // 8 - Métodos slice em arrays

// let frutas3 = ['Banana', 'Maçã', 'Uva', 'Melancia', 'Abacaxi'];
// let frutasCortadas = frutas3.slice(1, 4); // O método slice retorna um novo array contendo os elementos do índice 1 ao 3 (o índice 4 é exclusivo)
// console.log(frutasCortadas);

// // 9 - forEach

// let frutas4 = ['Banana', 'Maçã', 'Uva', 'Melancia', 'Abacaxi'];
// frutas4.forEach(function (fruta) {
//     console.log(fruta);
// });

// const jogosPrecos = [
//     { nome: 'The Legend of Zelda: Breath of the Wild', preco: 299.99 },
//     { nome: 'Super Mario Odyssey', preco: 249.99 },
//     { nome: 'Animal Crossing: New Horizons', preco: 199.99 }
// ]

// jogosPrecos.forEach(function (jogo) {
//     console.log(`${jogo.nome} custa R$${jogo.preco}.`);
// });

// // 10 - Rest Operators 

// const somaInfinita = (...args) => {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// console.log(somaInfinita(1, 2, 3));

// // 11 - For...of

// let frutas5 = ['Banana', 'Maçã', 'Uva', 'Melancia', 'Abacaxi'];
// for (let fruta of frutas5) {
//     console.log(fruta);
// }

// 12 - Destructuring em arrays e objetos

// let pessoa3 = {
//     nome: 'Carlos',
//     idade: 28,
//     profissao: 'Designer'
// };
// let { nome, idade, profissao } = pessoa3; // Destructuring de objetos
// console.log(nome);
// console.log(idade);
// console.log(profissao);

// let numeros2 = [10, 20, 30];
// let [a, b, c] = numeros2; // Destructuring de arrays
// console.log(a);
// console.log(b);
// console.log(c);

// 12.1 - Renomeando variáveis durante o destructuring

// let pessoa4 = {
//     nome: 'Mariana',
//     idade: 32,
//     profissao: 'Arquiteta'
// };
// let { nome: nomePessoa, idade: idadePessoa, profissao: profissaoPessoa } = pessoa4;
// console.log(nomePessoa);
// console.log(idadePessoa);
// console.log(profissaoPessoa);

// 13 - JSON (JavaScript Object Notation)

let myJson = '{"nome": "Renan", "idade": 22, "profissao": "Desenvolvedor", "skills": ["JavaScript", "HTML", "CSS"]}'; 
console.log(myJson);
console.log(typeof JSON);

let funcionario = JSON.parse(myJson); // Convertendo uma string JSON em um objeto JavaScript
console.log(funcionario);
