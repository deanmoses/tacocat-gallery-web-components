const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    :host {
        --default-padding: .5em;
        --default-border: solid black 1px;
    
        min-height: 100%;
        font-family: "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        padding: .7em;
        background-color: #94949c;
    }
</style>
<slot></slot>
`

customElements.define('tacocat-page', class extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

});