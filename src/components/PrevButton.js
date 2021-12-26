 customElements.define('tacocat-prevbutton', class extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.html();
    }

    html() {
        let title = !this.hasAttribute('title') ? '' : this.getAttribute('title');
        let disabled = !this.hasAttribute('disabled') ? '' : 'aria-disabled="true"';
        let svg = `<svg style="width: 1em; height: 1em;" viewBox="0 0 749 1102">
            <title>Previous</title>
            <path style="fill: currentcolor;" d="M749 198L397 551l352 353-197 198L0 550 552 0z"></path>
        </svg>`;

        return `
            <tacocat-button ${disabled}>${svg}<span class="hidden-xs">${title}</span></a>
        `;
      }

});