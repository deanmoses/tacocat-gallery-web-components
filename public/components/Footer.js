const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        flex: 0 0 1.7em;
        padding-top: var(--default-padding);
    }
</style>
<picture>
    <source srcset="images/tacocat-logo.webp" />
    <source srcset="images/tacocat-logo.png" />
    <img
        src="images/tacocat-logo.png"
        width="102px"
        height="19px"
        alt="Tacocat Logo"
    />
</picture>
`
customElements.define('tacocat-footer', class extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.host.setAttribute("role", "footer");
    }

});