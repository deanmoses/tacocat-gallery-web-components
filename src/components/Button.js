const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
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
</style>
<!-- TODO: implement <a aria-disabled="true" /> -->
<a class="btn"><slot></slot></a>
`
customElements.define('tacocat-button', class extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
    }

});