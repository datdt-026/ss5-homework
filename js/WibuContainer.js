const $template = document.getElementById("wibu-container-template");

class WibuContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['name', 'image', 'price', 'category', 'chapters'];
    }

    connectedCallback() {
        console.log("lô");
    }

    attributteChangedCallback(atrName, oldValue, newValue) {
        console.log((atrName, newValue));
        if (atrName == ' name') {
            this.shadowRoot.querySelector('.wibu-name').innerHTML = newValue;
        }
        if (atrName == 'image') {
            this.shadowRoot.querySelector('.wibu-photo').src = newValue;
        }
        if (atrName == 'price') {
            this.shadowRoot.querySelector('.wibu-price').innerHTML = newValue;
        }
        if (atrName == 'category') {
            this.shadowRoot.querySelector('.wibu-category').innerHTML = newValue;
        }
        if (atrName == 'chapters') {
            this.shadowRoot.querySelector('.wibu-chapters').innerHTML = newValue;
        }
    }

    disconnectedCallback() {
        console.log("lủng");
    }
}
window.customElements.define('wibu-container', WibuContainer)