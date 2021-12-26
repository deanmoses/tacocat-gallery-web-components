const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            border-left: var(--default-border);
            border-right: var(--default-border);
            border-bottom: var(--default-border);
        }
        .navbutton {
            flex: 1;

            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 0.2em;
          
            background-color: #cec68c;
            color: #333;
            border-color: #ccc;
            border: 1px solid transparent;
            padding-top: .2em;
            padding-bottom: .2em;
        }
        .navbutton:nth-child(2) {
            border-left: 1px solid rgb(132, 132, 132);
            border-right: 1px solid rgb(132, 132, 132);
    }
    </style>
`

class Nav extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'tacocat-nav', Nav );