class BoxShadowGenerator {
    constructor(horizontal, horizontalValue, vertical, verticalValue, blur, blurValue, spread, spreadValue, color, colorValue, opacity, opacityValue, inset, previewBox, rules, webkitRules, mozRules) {
        this.horizontal = horizontal;
        this.horizontalValue = horizontalValue;
        this.vertical = vertical;
        this.verticalValue = verticalValue;
        this.blur = blur;
        this.blurValue = blurValue;
        this.spread = spread;
        this.spreadValue = spreadValue;
        this.color = color;
        this.colorValue = colorValue;
        this.opacity = opacity;
        this.opacityValue = opacityValue;
        this.inset = inset;
        this.previewBox = previewBox;
        this.rules = rules;
        this.webkitRules = webkitRules;
        this.mozRules = mozRules;
    }

    initialize() {
        this.horizontalValue.value = this.horizontal.value;
        this.verticalValue.value = this.vertical.value;
        this.blurValue.value = this.blur.value;
        this.spreadValue.value = this.spread.value;
        this.colorValue.value = this.color.value;
        this.opacityValue.value = this.opacity.value;
        this.applyRules();
    }

    applyRules() {
        const hex = this.color.value || '#000000';
        const alpha = parseFloat(this.opacity.value) || 1;
        const rgba = this.hexToRgba(hex, alpha);
        const insetText = this.inset.checked ? 'inset ' : '';
        const shadowValue = `${insetText}${this.horizontal.value}px ${this.vertical.value}px ${this.blur.value}px ${this.spread.value}px ${rgba}`;

        this.previewBox.style.boxShadow = shadowValue;
        this.rules.textContent = shadowValue;
        this.webkitRules.textContent = shadowValue;
        this.mozRules.textContent = shadowValue;
    }

    hexToRgba(hex, alpha) {
        const h = hex.replace('#', '');
        const bigint = parseInt(h, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    updateValues(type, value) {
        switch (type) {
            case 'horizontal':
                this.horizontal.value = value;
                this.horizontalValue.value = value;
                break;
            case 'vertical':
                this.vertical.value = value;
                this.verticalValue.value = value;
                break;
            case 'blur':
                this.blur.value = value;
                this.blurValue.value = value;
                break;
            case 'spread':
                this.spread.value = value;
                this.spreadValue.value = value;
                break;
            case 'color':
                this.color.value = value;
                this.colorValue.value = value;
                break;
            case 'opacity':
                this.opacity.value = value;
                this.opacityValue.value = value;
                break;

        }
        this.applyRules();
    }


}
// Selecao de elementos

const horizontalInput = document.getElementById('horizontal');
const horizontalValue = document.getElementById('horizontal-value');
const verticalInput = document.getElementById('vertical');
const verticalValue = document.getElementById('vertical-value');
const blurInput = document.getElementById('blur');
const blurValue = document.getElementById('blur-value');
const spreadInput = document.getElementById('spread');
const spreadValue = document.getElementById('spread-value');
const color = document.getElementById('color');
const colorValue = document.getElementById('color-value');
const opacity = document.getElementById('opacity');
const opacityValue = document.getElementById('opacity-value');
const inset = document.getElementById('inset');
const previewBox = document.getElementById('box');
const rules = document.querySelector('#rule span');
const webkitRules = document.querySelector('#webkit-rule span');
const mozRules = document.querySelector('#moz-rule span');
const boxShadow = new BoxShadowGenerator(horizontalInput, horizontalValue, verticalInput, verticalValue, blurInput, blurValue, spreadInput, spreadValue, color, colorValue, opacity, opacityValue, inset, previewBox, rules, webkitRules, mozRules);

boxShadow.initialize();

horizontalInput.addEventListener('input', () => {
    horizontalValue.value = horizontalInput.value;
    boxShadow.applyRules();
});

verticalInput.addEventListener('input', () => {
    verticalValue.value = verticalInput.value;
    boxShadow.applyRules();
});

blurInput.addEventListener('input', () => {
    blurValue.value = blurInput.value;
    boxShadow.applyRules();
});

spreadInput.addEventListener('input', () => {
    spreadValue.value = spreadInput.value;
    boxShadow.applyRules();
});

// Eventos

color.addEventListener('input', (e) => {
    colorValue.value = e.target.value;
    boxShadow.applyRules();
});

opacity.addEventListener('input', (e) => {
    opacityValue.value = e.target.value;
    boxShadow.applyRules();
});

inset.addEventListener('change', () => {
    boxShadow.applyRules();
});

const rulesArea = document.getElementById('rules-area');
const copyInstructions = document.getElementById('copy-instructions');
const ruleEl = document.getElementById('rule');
const webkitEl = document.getElementById('webkit-rule');
const mozEl = document.getElementById('moz-rule');

rulesArea.addEventListener('click', () => {
    const lines = [ruleEl.textContent, webkitEl.textContent, mozEl.textContent];
    const textToCopy = lines.map(l => l.trim()).join('\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyInstructions.textContent = 'Regra copiada para a área de transferência!';
        setTimeout(() => {
            copyInstructions.textContent = 'Clique para copiar a regra de Box-Shadow!';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
});