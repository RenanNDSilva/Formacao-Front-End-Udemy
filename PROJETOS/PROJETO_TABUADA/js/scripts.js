// Seleção de elementos

const multiplicationForm = document.getElementById('multiplication-form');
const numberInput = document.getElementById('number');
const multiplicationInput = document.getElementById('multiplicator');
const multiplicationTable = document.getElementById('multiplication-operations');
const multiplicationTitle = document.getElementById('multiplication-title').querySelector('span');

// Funções

function createMultiplicationRow(number, multiplicator) {

    multiplicationTable.innerHTML = ''; // Limpa a tabela antes de adicionar novos resultados

    for (let i = 1; i <= multiplicator; i++) {
        const result = number * i;

        const template = `
            <div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const row = doc.body.firstChild;
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.textContent = number; // Atualiza o título com o número da tabuada

}

// Eventos

multiplicationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const multiplicationNumber = parseInt(numberInput.value);
    const multiplicator = parseInt(multiplicationInput.value);

    if (isNaN(multiplicationNumber) || isNaN(multiplicator)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    createMultiplicationRow(multiplicationNumber, multiplicator);
});