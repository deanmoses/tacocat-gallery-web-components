let title = "Dec 21";
let linkUrl = "#2021/12-20";
let imgUrl = "https://cdn.tacocat.com/zenphoto/cache/2021/12-20/xmas_restaurant2_200_w200_h200_cw200_ch200_thumb.jpg?cached=1640062642";

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
<a href="${linkUrl}"><img src="${imgUrl}"alt="${title}"></a><a href="${linkUrl}">${title}</a>
`

customElements.define('tacocat-thumbnail', class extends HTMLElement {
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});