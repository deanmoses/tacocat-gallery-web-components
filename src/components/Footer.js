const template = document.createElement('template');
template.innerHTML = `
<img src="./assets/tacocat-logo.png" width="102px" height="19px" />
`

class Footer extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'tacocat-footer', Footer );