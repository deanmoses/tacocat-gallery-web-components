customElements.define('tacocat-nextbutton', class extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.html();
    }

    html() {
        let title = !this.hasAttribute('title') ? '' : this.getAttribute('title');
        let disabled = !this.hasAttribute('disabled')  ? '' : 'disabled';
        let svg=`<svg class="icon" style="width: 1em; height: 1em;"
            viewBox="0 0 749 1102">
            <title>Next</title>
            <path style="fill: currentcolor;" d="M749 551l-551 551L0 904l353-353L0 198 198 0z"></path>
        </svg>`;
        return `
            <tacocat-button ${disabled}><span>${title}</span> ${svg}</a>
        `;
      }

});