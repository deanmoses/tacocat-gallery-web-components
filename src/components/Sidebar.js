const template = document.createElement('template');
template.innerHTML = `
<div class="hidden-sm">sidebar</div>
`

class Sidebar extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'tacocat-sidebar', Sidebar );