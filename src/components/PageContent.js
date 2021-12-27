const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    :host {
        flex: 1;
        display: flex;
        border-left: var(--default-border);
        border-right: var(--default-border);
        border-bottom: var(--default-border);
    }
</style>
<slot></slot>
`

customElements.define('tacocat-pagecontent', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});