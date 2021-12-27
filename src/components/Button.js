const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    a {
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 0.2em;
      
        background-color: #cec68c;
        color: #333;
        border-color: #ccc;
        border: 1px solid transparent;
        padding-top: .2em;
        padding-bottom: .2em;
    }

    a[aria-disabled="true"] {
        color: #ccc;
        cursor: not-allowed;
        filter: alpha(opacity=65);
        opacity: .65;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>
<a><slot></slot></a>
`
customElements.define('tacocat-button', class extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));

        if (this.hasAttribute('disabled')) {
            let a = this.shadowRoot.querySelector("a:first-of-type");
            a.setAttribute("aria-disabled", "true");
        }        
    }

});