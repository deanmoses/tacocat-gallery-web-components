const template = document.createElement('template');
template.innerHTML = `
<div class="page-title">
    <span class="hidden-xs" style="color:pink"><slot name="title"></slot></span>
    <span class="visible-xs"><slot name="short-title"></slot></span>
</div>
`

customElements.define('tacocat-header', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});