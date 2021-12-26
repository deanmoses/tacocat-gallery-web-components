const template = document.createElement('template');
template.innerHTML = `
<style>
    @media (max-width: 767px) {
        .hidden-sm {
            display: none !important;
        }
    }

    @media (max-width: 576px) {
        .hidden-xs {
            display: none !important;
        }
    }

    @media (min-width: 576px) {
        .visible-xs {
            display: none !important;
        }
    }

    .page-title {
        font-size: 28px;
    }
</style>

<div class="page-title">
    <span class="hidden-xs""><slot name="title"></slot></span>
    <span class="visible-xs"><slot name="short-title"></slot></span>
</div>
`

customElements.define('tacocat-header', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});