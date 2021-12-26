customElements.define('tacocat-button', class extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.html();
    }

    html() {
        let title = !this.hasAttribute('title') ? '' : this.getAttribute('title');
        let disabled = !this.hasAttribute('disabled') ? '' : 'aria-disabled="true"';
        return `
            <style>
                a {
                    text-decoration: none;
                }
            
                a[aria-disabled="true"] {
                    color: #ccc;
                    cursor: not-allowed;
                    filter: alpha(opacity=65);
                    opacity: .65;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                }
                @media (max-width: 576px) {
                    .hidden-xs {
                        display: none !important;
                    }
                }
            </style>
            <a class="btn" ${disabled}><slot></slot></a>
        `;
      }

});