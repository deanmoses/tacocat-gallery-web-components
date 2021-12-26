const template = document.createElement('template');
template.innerHTML = `
<aside><slot></slot></aside>
`

customElements.define('tacocat-sidebar', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});