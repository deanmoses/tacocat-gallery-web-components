const template = document.createElement('template');
template.innerHTML = `
HELLO WURLDDDD
`

class HelloWorld extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'hello-world', HelloWorld );