// 1 - Métodos e Objetos

// const pessoa = {
//     // Propriedades do objeto pessoa
//     nome: 'João',
//     idade: 30,
//     // Método falar do objeto pessoa
//     falar: function() {
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     },

//     novoNome: function(novoNome) {
//         this.nome = novoNome; // Atualiza o nome do objeto pessoa
//     }

// };

// pessoa.falar(); // Chama o método falar do objeto pessoa
// pessoa.novoNome('Maria'); // Chama o método novoNome para atualizar o nome
// pessoa.falar(); // Chama novamente o método falar para verificar a atualização do nome

// 2 - Classes Básicas

// class Animal {
//     constructor(nome, especie) {
//         this.nome = nome; // Propriedade nome do objeto Animal
//         this.especie = especie; // Propriedade especie do objeto Animal

//     }
// }

// const cachorro = new Animal('Rex', 'Cachorro'); // Cria uma instância da classe Animal
// console.log(cachorro.nome); // Acessa a propriedade nome do objeto cachorro
// console.log(cachorro.especie); // Acessa a propriedade especie do objeto cachorro

// // 2 - Construtores e Métodos

// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     apresentar() {
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     }
// }

// const pessoaNova = new Pessoa('João', 30);
// pessoaNova.apresentar();

// 3 - Overriding (Sobrescrita de Métodos)

class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes() {
        console.log(`Veículo: ${this.marca} ${this.modelo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo); // Chama o construtor da classe pai (Veiculo)
        this.ano = ano; // Propriedade adicional para a classe Carro
    }

    detalhes() {
        super.detalhes(); // Chama o método detalhes da classe pai (Veiculo)
        console.log(`Ano: ${this.ano}`);
    }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2020);
meuCarro.detalhes(); // Chama o método detalhes da classe Carro, que também chama o método da classe Veiculo

// 4 - Symbols (Símbolos)

// const id = Symbol('id'); // Cria um símbolo único com a descrição 'id'
// const pessoaSimbolo = {
//     nome: 'Alice',
//     idade: 25,
//     [id]: 12345 // Usa o símbolo como chave para uma propriedade do objeto
// };
// console.log(pessoaSimbolo[id]); // Acessa a propriedade do objeto usando o símbolo como chave

// 5 - Getters e Setters

class Retangulo {
    constructor(largura, altura) {
        this._largura = largura;
        this._altura = altura;
    }

    // Getter para a largura
    get largura() {
        return this._largura;
    }

    // Setter para a largura
    set largura(novaLargura) {
        if (novaLargura > 0) {
            this._largura = novaLargura;
        }
    }

    // Getter para a altura
    get altura() {
        return this._altura;
    }

    // Setter para a altura
    set altura(novaAltura) {
        if (novaAltura > 0) {
            this._altura = novaAltura;
        }
    }

    // Método para calcular a área
    get area() {
        return this._largura * this._altura;
    }
}

const meuRetangulo = new Retangulo(5, 10);
console.log(meuRetangulo.area); // Acessa a propriedade area, que é calculada usando os getters para largura e altura
meuRetangulo.largura = 7; // Usa o setter para atualizar a largura
console.log(meuRetangulo.area); // Acessa novamente a propriedade area para verificar a atualização da largura

// 6 - Herança

class Animais {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
    detalhes() {
        console.log(`Animal: ${this.nome}, Espécie: ${this.especie}`);
    }
}

class Cachorro extends Animais {
    constructor(nome, especie, raca) {
        super(nome, especie); // Chama o construtor da classe pai (Animais)
        this.raca = raca; // Propriedade adicional para a classe Cachorro
    }
}

class Gato extends Animais {
    constructor(nome, especie, cor) {
        super(nome, especie); // Chama o construtor da classe pai (Animais)
        this.cor = cor; // Propriedade adicional para a classe Gato
    }
}

const cachorro = new Cachorro('Rex', 'Cachorro', 'Labrador');
cachorro.detalhes(); // Chama o método detalhes da classe pai (Animais) para exibir as informações do cachorro
const gato = new Gato('Mia', 'Gato', 'Preto');
gato.detalhes(); // Chama o método detalhes da classe pai (Animais) para exibir as informações do gato

// 7 - Instanceof

console.log(cachorro instanceof Cachorro); // Verifica se cachorro é uma instância da classe Cachorro
console.log(cachorro instanceof Animais); // Verifica se cachorro é uma instância da classe Animais (classe pai)
console.log(gato instanceof Gato); // Verifica se gato é uma instância da classe Gato
console.log(gato instanceof Animais); // Verifica se gato é uma instância da classe Animais (classe pai)
