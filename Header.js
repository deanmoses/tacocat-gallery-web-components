const template = document.createElement('template');
template.innerHTML = `
<div class="page-title">
    <span class="hidden-xs" style="color:pink"><slot name="title"></slot></span>
    <span class="visible-xs"><slot name="short-title"></slot></span>
</div>
`

class Header extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
    // connectedCallback() {
    //     const node = document.importNode(template.content, true);
    //     this.attachShadow({mode: 'open'});
    //     this.shadowRoot.innerHTML = node;
    // }
    // connectedCallback() {
    //     this.attachShadow({mode: 'open'});
    //     this.shadowRoot.innerHTML = `
    //     <div class="page-title">
    //         <span class="hidden-xs" style="color:red"><slot name="title"></slot></span>
    //         <span class="visible-xs"><slot name="short-title"></slot></span>
    //         </div>
    //     `;
    //   }
}

customElements.define( 'tacocat-header', Header );