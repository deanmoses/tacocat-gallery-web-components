const template = document.createElement('template');
template.innerHTML = `
<link href="reset.css" rel="stylesheet">
<link href="index.css" rel="stylesheet">
<style>
    main {
        flex: 3;
        gap: var(--default-padding);
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