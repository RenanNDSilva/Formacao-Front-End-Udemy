/*
    10 EXERCICIOS DE POO (NIVEL FACIL)
    Instrucoes:
    - Resolva um exercicio por vez.
    - Use console.log para testar o resultado.
    - Nao olhe a resposta pronta: complete os TODOs.
*/

// ==========================
// EXERCICIO 1 - Classe basica
// Crie uma classe chamada Pessoa com:
// - propriedades: nome e idade
// - metodo: apresentar() -> "Ola, meu nome e X e tenho Y anos."
// ==========================

// TODO: criar classe Pessoa

// Exemplo de teste esperado:
// const p1 = new Pessoa("Ana", 20);
// p1.apresentar();

// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     apresentar() {
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     }
// }

// const p1 = new Pessoa("Ana", 20);
// p1.apresentar();

// ==========================
// EXERCICIO 2 - Metodo para atualizar estado
// Crie uma classe Lampada com:
// - propriedade: ligada (comeca false)
// - metodos: ligar(), desligar(), mostrarEstado()
// ==========================

// TODO: criar classe Lampada

// Exemplo de teste esperado:
// const l1 = new Lampada();
// l1.mostrarEstado(); // desligada
// l1.ligar();
// l1.mostrarEstado(); // ligada

class Lampada {
    constructor() {
        this.ligada = false;
    }

    ligar() {
        this.ligada = true;
    }

    desligar() {
        this.ligada = false;
    }

    mostrarEstado() {
        if (this.ligada) {
            console.log("ligada.");
        } else {
            console.log("desligada.");
        }
    }

}

const l1 = new Lampada();
l1.mostrarEstado();
l1.ligar();
l1.mostrarEstado();

// ==========================
// EXERCICIO 3 - Calculadora simples
// Crie uma classe Calculadora com metodos:
// - somar(a, b)
// - subtrair(a, b)
// - multiplicar(a, b)
// - dividir(a, b) (se b for 0, retornar "Nao pode dividir por zero")
// ==========================

// TODO: criar classe Calculadora

// Exemplo de teste esperado:
// const calc = new Calculadora();
// console.log(calc.somar(2, 3));

class Calculadora {
    somar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            return "Nao pode dividir por zero";
        }
        return a / b;
    }
}

const c1 = new Calculadora();
console.log(c1.somar(2, 3));
console.log(c1.subtrair(5, 2));
console.log(c1.multiplicar(4, 3));
console.log(c1.dividir(10, 2));
console.log(c1.dividir(10, 0));

// ==========================
// EXERCICIO 4 - Encapsulamento simples
// Crie uma classe ContaBancaria com:
// - propriedade: titular
// - propriedade privada/simulada: saldo (inicia 0)
// - metodos: depositar(valor), sacar(valor), verSaldo()
// Regras:
// - nao permitir deposito ou saque com valor <= 0
// - nao permitir saque maior que saldo
// ==========================

// TODO: criar classe ContaBancaria

class ContaBancaria {
    constructor(titular) {
        this.titular = titular;
        this._saldo = 0; // Propriedade privada/simulada
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        } else {
            console.log("Valor de deposito deve ser maior que zero.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
        } else {
            console.log("Valor de saque invalido ou saldo insuficiente.");
        }
    }

    verSaldo() {
        return this._saldo;
    }
}

// ==========================
// EXERCICIO 5 - Heranca basica
// Crie uma classe Animal com metodo fazerSom().
// Crie classes Cachorro e Gato que herdam de Animal
// e sobrescrevem fazerSom().
// ==========================

// TODO: criar classes Animal, Cachorro e Gato

class Animal {
    fazerSom() {
        console.log("O animal faz um som.");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("O cachorro late.");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("O gato mia.");
    }
}

const cachorro = new Cachorro();
cachorro.fazerSom(); // O cachorro late.
const gato = new Gato();
gato.fazerSom(); // O gato mia.

// ==========================
// EXERCICIO 6 - Produto com desconto
// Crie uma classe Produto com:
// - nome, preco
// - metodo aplicarDesconto(percentual)
// Exemplo: preco 100 com 10% de desconto -> 90
// ==========================

// TODO: criar classe Produto

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual) {
        const desconto = (percentual / 100) * this.preco;
        this.preco -= desconto;
    }
}

const p1 = new Produto("Camisa", 100);
console.log(p1.preco);

// ==========================
// EXERCICIO 7 - Aluno e media
// Crie uma classe Aluno com:
// - nome
// - notas (array)
// - metodo calcularMedia()
// - metodo foiAprovado() (media >= 7)
// ==========================

// TODO: criar classe Aluno

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = [];
    }

    adicionarNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    foiAprovado() {
        return this.calcularMedia() >= 7;
    }
}

// ==========================
// EXERCICIO 8 - Metodo estatico
// Crie uma classe ConversorTemperatura com metodo estatico:
// - celsiusParaFahrenheit(c)
// Formula: F = (C * 9/5) + 32
// ==========================

// TODO: criar classe ConversorTemperatura

// Exemplo de uso esperado:
// console.log(ConversorTemperatura.celsiusParaFahrenheit(0)); // 32

class ConversorTemperatura {
    static celsiusParaFahrenheit(c) {
        return (c * 9 / 5) + 32;
    }
}

console.log(ConversorTemperatura.celsiusParaFahrenheit(0));

// ==========================
// EXERCICIO 9 - Composicao simples
// Crie uma classe Motor com metodo ligar().
// Crie uma classe Carro que recebe um Motor no construtor
// e tenha metodo ligarCarro() que usa o motor.
// ==========================

// TODO: criar classes Motor e Carro

class Motor {
    ligar() {
        console.log("Motor ligado.");
    }
}

class Carro {
    constructor(motor) {
        this.motor = motor;
    }

    ligarCarro() {
        this.motor.ligar();
    }
}

const motor = new Motor();
const carro = new Carro(motor);
carro.ligarCarro(); // Motor ligado.

// ==========================
// EXERCICIO 10 - Lista de objetos
// Crie uma classe Biblioteca com:
// - propriedade: livros (array)
// - metodo adicionarLivro(titulo, autor)
// - metodo listarLivros()
// ==========================

// TODO: criar classe Biblioteca

// Exemplo de teste esperado:
// const b = new Biblioteca();
// b.adicionarLivro("Dom Casmurro", "Machado de Assis");
// b.listarLivros();

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(titulo, autor) {
        this.livros.push({ titulo, autor });
    }

    listarLivros() {
        this.livros.forEach(livro => {
            console.log(`"${livro.titulo}" de ${livro.autor}`);
        });
    }
}

const b = new Biblioteca();
b.adicionarLivro("Dom Casmurro", "Machado de Assis");
b.adicionarLivro("O Alquimista", "Paulo Coelho");
b.listarLivros();