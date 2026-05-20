// 1 - Adicionando eventos

const btn = document.querySelector('#my-button');

btn.addEventListener('click', function() {
    alert('Button clicked!');
});

// 2 - Removendo eventos

const secondBtn = document.querySelector('#btn');

function handleClick() {
    alert('Button clicked!');
}

secondBtn.addEventListener('click', handleClick);

const thirdBtn = document.querySelector('#other-btn');

thirdBtn.addEventListener('click', function() {
    secondBtn.removeEventListener('click', handleClick);
    alert('Event removed from the first button!');
});

// 3 - Argumentos do evento

const myTitle = document.querySelector('#title');

myTitle.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Clicked element:', event.target);
    console.log('Mouse coordinates:', event.clientX, event.clientY);
});

// 4 - Propagação de eventos

const containerBtn = document.querySelector('#btn-container');
const btnInsideContainer = document.querySelector('#div-btn');

containerBtn.addEventListener('click', function() {
    alert('Container clicked!');
});

btnInsideContainer.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Button inside container clicked!');
});

// 5 - Removendo evento padrão

const a = document.querySelector('a');

a.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Default action prevented!');
});

// 6 - Eventos de Tecla

document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// 7 - Eventos de Mouse

const mouseEventsTitle = document.querySelector('#mouse-events');

mouseEventsTitle.addEventListener('mousedown', function() {
    console.log('Mouse button pressed');
});

mouseEventsTitle.addEventListener('mouseup', function() {
    console.log('Mouse button released');
});

mouseEventsTitle.addEventListener('doubleclick', function() {
    console.log('Mouse button double-clicked');
});

// 8 - Movimento do mouse

// document.addEventListener('mousemove', function(event) {
//     console.log('Mouse moved to:', event.clientX, event.clientY);
// });

// 9 - Evento de Scroll

window.addEventListener('scroll', function() {
    console.log('Page scrolled to:', window.scrollY);
});

// 10 - Evento de Focus/Blur

const input = document.querySelector('#my-input');
input.addEventListener('focus', function() {
    console.log('Input focused');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus');
});

// 11 - Evento de Carregamento

// window.addEventListener('load', function() {
//     console.log('Page fully loaded');
// });

// window.addEventListener('beforeunload', function(event) {
//     event.preventDefault();
//     event.returnValue = '';
//     console.log('Page is about to be unloaded');
// });

// 12 - DeBounce

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedScroll = debounce(function() {
    console.log('Debounced scroll event:', window.scrollY);
}, 200);

window.addEventListener('scroll', debouncedScroll);

