const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    :host {
        flex: 3;
        gap: calc(var(--default-padding) * 2);
        padding: calc(var(--default-padding) * 2);
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    @media (max-width: 456px) {
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
</style>
<slot></slot>
`

customElements.define('tacocat-maincontent', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
  });