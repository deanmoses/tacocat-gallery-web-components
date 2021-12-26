const template = document.createElement('template');
template.innerHTML = `
    <link href="reset.css" rel="stylesheet">
    <link href="index.css" rel="stylesheet">
    <style>
        nav {
            display: flex;
            border-left: var(--default-border);
            border-right: var(--default-border);
            border-bottom: var(--default-border);
        }
        /* for each immediate child, which I presume to be a button of some sort */
        nav > ::slotted(*) {
            flex: 1;

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
        /* for my second child, which I presume to be a button of some sort */
        nav > ::slotted(:nth-child(2)) {
            border-left: 1px solid rgb(132, 132, 132);
            border-right: 1px solid rgb(132, 132, 132);
    }
    </style>
    <nav><slot></slot></nav>
`

class Nav extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
    }
}

customElements.define( 'tacocat-nav', Nav );