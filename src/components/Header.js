const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    :host {
        padding: var(--default-padding);
        background-color: f7de5a;
        border: var(--default-border);
    }
    
    h1 {
        font-size: 28px;
    }
</style>
<h1 class="hidden-xs" class="page-title"><slot name="title"></slot></h1>
<h1 class="visible-xs" class="page-title"><slot name="short-title"></slot></h1>
`

customElements.define('tacocat-header', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});