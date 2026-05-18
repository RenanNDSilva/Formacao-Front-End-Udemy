// 1 - Movendo-se pelo DOM

// console.log(document.body); // Acessa o elemento <body>

// console.log(document.body.childNodes[1]); // Acessa os nós filhos do <body>

// console.log(document.body.childNodes[1].childNodes[0]); // Acessa o primeiro nó filho do segundo nó filho do <body>

// console.log(document.body.childNodes[1].childNodes[1].textContent); // Acessa o conteúdo de texto do primeiro nó filho do segundo nó filho do <body>

// 2 - Selecionando elementos

// console.log(document.getElementById('main-header')); // Seleciona o elemento com o ID 'main-header'

// console.log(document.getElementsByClassName('section-title')); // Seleciona os elementos com a classe 'section-title'

// console.log(document.getElementsByTagName('p')); // Seleciona os elementos <p>

// console.log(document.querySelector('.section-title')); // Seleciona o primeiro elemento com a classe 'section-title'

// console.log(document.querySelectorAll('.section-title')); // Seleciona todos os elementos com a classe 'section-title'

// const listItems = document.getElementsByTagName('li'); // Seleciona todos os elementos <li>
// for (let i = 0; i < listItems.length; i++) {
//     console.log(listItems[i].textContent); // Acessa o conteúdo de texto de cada elemento <li>
// }

// 3 - Selecionando elemento por ID

// const mainHeader = document.getElementById('main-container'); // Seleciona o elemento com o ID 'main-container'
// console.log(mainHeader.textContent); // Acessa o conteúdo de texto do elemento com ID 'main-header'

// // 4 - Selecionando elementos por classe

// const sectionTitles = document.getElementsByClassName('product'); // Seleciona os elementos com a classe 'section-title'
// for (let i = 0; i < sectionTitles.length; i++) {
//     console.log(sectionTitles[i].textContent); // Acessa o conteúdo de texto de cada elemento com a classe 'section-title'
// }

// 5 - Selecionando os elementos por CSS

// const productsQuery = document.querySelectorAll('.product'); // Seleciona todos os elementos com a classe '.product'
// productsQuery.forEach(product => {
//     console.log(product.textContent); // Acessa o conteúdo de texto de cada elemento com a classe '.product'
// });

// 6 - Alterando o HTML com InsertBefore

const p = document.createElement('p'); // Cria um novo elemento <p>
p.textContent = 'Este é um novo parágrafo.'; // Define o conteúdo de texto do novo elemento <p>

console.log(p); // Exibe o novo elemento <p> no console

const header = title.parentElement; // Acessa o elemento pai do título
header.insertBefore(p, title); // Insere o novo elemento <p> antes do título dentro do elemento pai

// 7 - Alterando o HTML com AppendChild

const newItem = document.createElement('li'); // Cria um novo elemento <li>
newItem.textContent = 'Novo item'; // Define o conteúdo de texto do novo elemento <li>

const list = document.querySelector('ul'); // Seleciona o elemento <ul>
list.appendChild(newItem); // Adiciona o novo elemento <li> como filho do elemento <ul>

// 8 - Alterando o HTML com replaceChild

const replacementItem = document.createElement('li'); // Cria um novo elemento <li>
replacementItem.textContent = 'Item substituído'; // Define o conteúdo de texto do novo elemento <li>

const oldItem = list.querySelector('li'); // Seleciona o primeiro elemento <li> dentro do elemento <ul>
list.replaceChild(replacementItem, oldItem); // Substitui o elemento <li> selecionado pelo novo elemento <li>

// 9 - createTextNode

const textNode = document.createTextNode('Este é um nó de texto.'); // Cria um novo nó de texto
const paragraph = document.createElement('p'); // Cria um novo elemento <p>

paragraph.appendChild(textNode); // Adiciona o nó de texto como filho do elemento <p>
console.log(paragraph); // Exibe o elemento <p> com o nó de texto no console

// 10 - Trabalhando com atributos

const link = document.querySelector('a'); // Seleciona o primeiro elemento <a>

link.setAttribute('href', 'https://www.example.com'); // Define o atributo 'href' do elemento <a>
console.log(link.getAttribute('href')); // Acessa o valor do atributo 'href' do elemento <a>
link.removeAttribute('href'); // Remove o atributo 'href' do elemento <a>
console.log(link.hasAttribute('href')); // Verifica se o elemento <a> possui o atributo 'href'

// 11 - Altura e Largura dos Elementos

const footer = document.querySelector('footer'); // Seleciona o elemento <footer>

console.log(footer.offsetWidth); // Acessa a largura total do elemento <footer>, incluindo bordas e rolagem
console.log(footer.offsetHeight); // Acessa a altura total do elemento <footer>, incluindo bordas e rolagem
console.log(footer.clientWidth); // Acessa a largura do elemento <footer>, excluindo bordas e rolagem
console.log(footer.clientHeight); // Acessa a altura do elemento <footer>, excluindo bordas e rolagem

// 12 - CSS com JavaScript

const mainHeader = document.getElementById('main-container'); // Seleciona o elemento com o ID 'main-container'
mainHeader.style.backgroundColor = 'lightblue'; // Altera a cor de fundo do elemento <header>
mainHeader.style.color = 'white'; // Altera a cor do texto do elemento <header>
mainHeader.style.padding = '20px'; // Altera o preenchimento do elemento <header>
mainHeader.style.textAlign = 'center'; // Altera o alinhamento do texto do elemento <header> 

// 13 - Alterando estilos de varios elementos

const products = document.querySelectorAll('.product'); // Seleciona todos os elementos com a classe '.product'
products.forEach(product => {
    product.style.border = '1px solid black'; // Adiciona uma borda a cada elemento com a classe '.product'
    product.style.padding = '10px'; // Adiciona preenchimento a cada elemento com a classe '.product'
    product.style.marginBottom = '10px'; // Adiciona margem inferior a cada elemento com a classe '.product'
});