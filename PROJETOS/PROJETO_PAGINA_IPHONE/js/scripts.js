const buttons = document.querySelectorAll('#image-picker li');
const image = document.querySelector('#product-image');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        buttons.forEach(btn => btn.querySelector('.color').classList.remove('selected'));
        const button = event.currentTarget;
        const id = button.getAttribute('id');
        button.querySelector('.color').classList.add('selected');
        image.classList.add('changing');
        image.setAttribute('src', `img/iphone_${id}.jpg`);
        setTimeout(() => {
            image.classList.remove('changing');
        }, 500);
    });
});