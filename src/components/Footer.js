const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        flex: 0 0 1.7em;
    }
    footer {
        padding-top: var(--default-padding);
    }
</style>
<footer>
    <img src="./assets/tacocat-logo.png" width="102px" height="19px" />
</footer>
`

class Footer extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'tacocat-footer', Footer );