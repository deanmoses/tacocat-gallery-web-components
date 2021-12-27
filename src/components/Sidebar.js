const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        flex: 1;
        min-width: 8em;
        padding: var(--default-padding);
        background-color: #838470;
        border-right: var(--default-border);
    }

    h2 {
        display: none;
    }
</style>
<h2 role="heading" aria-level="2"><slot name="title"></slot></h2>
<slot name="content"></slot>
`

customElements.define('tacocat-sidebar', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.host.classList.add("hidden-sm");
        this.shadowRoot.host.setAttribute("role", "section");
    }
});