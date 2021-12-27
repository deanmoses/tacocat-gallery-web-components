const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    tacocat-button {
        flex: 1;
    }
</style>
<tacocat-button>
    <span></span>
    <svg class="icon" style="width: 1em; height: 1em;" viewBox="0 0 749 1102">
        <title>Next</title>
        <path style="fill: currentcolor;" d="M749 551l-551 551L0 904l353-353L0 198 198 0z"></path>
    </svg>
</tacocat-button>
`

customElements.define('tacocat-nextbutton', class extends HTMLElement {

    static get observedAttributes() {
        return ['title', 'disabled'];
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        if (this.hasAttribute('title') && !!this.getAttribute('title')) {
            let a = this.shadowRoot.querySelector("span:first-of-type");
            a.setAttribute("title", this.getAttribute('title'));
        }

        if (this.hasAttribute('disabled')) {
            let a = this.shadowRoot.querySelector("tacocat-button:first-of-type");
            a.setAttribute("disabled", "");
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!!this.shadowRoot) {
            if ("title" === name) {
                if (this.hasAttribute('title') && !!this.getAttribute('title')) {
                    let a = this.shadowRoot.querySelector("tacocat-button:first-of-type");
                    a.setAttribute("title", this.getAttribute('title'));
                }
                else {
                    let a = this.shadowRoot.querySelector("tacocat-button:first-of-type");
                    a.removeAttribute("title");
                }
            }
    
            if ("disabled" === name) {
                if (this.hasAttribute('disabled')) {
                    let a = this.shadowRoot.querySelector("tacocat-button:first-of-type");
                    a.setAttribute("disabled", "");
                } else {
                    let a = this.shadowRoot.querySelector("tacocat-button:first-of-type");
                    a.removeAttribute("disabled");
                }
            }
        }
    }

});