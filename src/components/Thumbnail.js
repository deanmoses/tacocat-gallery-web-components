const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    a:nth-of-type(1) {
        width: 200px;
        height: 200px;
    } 
    a:nth-of-type(2) {
        margin-top: 0.3em;
    }
    img {
        width: 200px;
        height: 200px;
        border: var(--default-border);
    }
</style>
<a><img></a><a></a>
`

customElements.define('tacocat-thumbnail', class extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        let a1, a2, img;

        [a1, a2] = this.shadowRoot.querySelectorAll("a");
        img = this.shadowRoot.querySelector("img");

        if (this.hasAttribute('href') && !!this.getAttribute('href')) {
            a1.setAttribute("href", this.getAttribute('href') );
            a2.setAttribute("href", this.getAttribute('href') );
        }

        if (this.hasAttribute('src') && !!this.getAttribute('src')) {
            img.setAttribute("src", this.getAttribute('src'));
        }

        if (this.hasAttribute('title') && !!this.getAttribute('title')) {
            img.setAttribute("alt", this.getAttribute('title'));
            a2.textContent = this.getAttribute('title');
        }
    }

});