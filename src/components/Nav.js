const template = document.createElement('template');
template.innerHTML = `
    <link href="reset.css" rel="stylesheet">
    <link href="index.css" rel="stylesheet">
    <style>
        :host {
            display: flex;
            border-left: var(--default-border);
            border-right: var(--default-border);
            border-bottom: var(--default-border);
        }
        /* for each immediate child, which I presume to be a button of some sort */
        :host > ::slotted(*) {
            flex: 1;
        }
        /* for my second child, which I presume to be a button of some sort */
        :host > ::slotted(:nth-child(2)) {
            border-left: 1px solid rgb(132, 132, 132);
            border-right: 1px solid rgb(132, 132, 132);
    }
    </style>
    <slot></slot>
`

customElements.define('tacocat-nav', class extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.host.setAttribute("role", "navigation");
    }

});