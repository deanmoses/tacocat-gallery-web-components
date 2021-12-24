const template = document.createElement('template');
template.innerHTML = `
<main>maincontent</main>
`

class MainContent extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'tacocat-maincontent', MainContent );