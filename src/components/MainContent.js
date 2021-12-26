const template = document.createElement('template');
template.innerHTML = `
<style>
    main {
        flex: 3;
        padding: var(--default-padding);
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    @media (max-width: 456px) {
        main {
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
</style>
<main><slot></slot></main>
`

customElements.define('tacocat-maincontent', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
  });