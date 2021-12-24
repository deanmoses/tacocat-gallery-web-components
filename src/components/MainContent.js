const template = document.createElement('template');
template.innerHTML = `
<main><slot></slot></main>
`

customElements.define('tacocat-maincontent', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
  });