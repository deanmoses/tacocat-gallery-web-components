const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        flex: 0 0 1.7em;
        padding-top: var(--default-padding);
    }
</style>
<img src="./assets/tacocat-logo.png" width="102px" height="19px" />
`
customElements.define('tacocat-footer', class extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.host.setAttribute("role", "footer");
    }

});