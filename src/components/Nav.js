const template = document.createElement('template');
template.innerHTML = `
    <a class="btn" href="#2020"><svg style="width: 1em; height: 1em;" viewBox="0 0 749 1102">
        <title>Previous</title>
        <path style="fill: currentcolor;" d="M749 198L397 551l352 353-197 198L0 550 552 0z"></path>
    </svg> <span class="hidden-xs">2020</span></a>

    <a class="btn" href="#"><svg class="icon" style="width: 1.2em; height: 1.25em;" viewBox="0 0 20 20">
        <title>All Years</title>
        <path style="fill: currentcolor;"
            d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z">
        </path>
    </svg> <span class="hidden-xs">All Years</span></a>

    <a class="btn" aria-disabled="true"><span></span> <svg class="icon" style="width: 1em; height: 1em;"
        viewBox="0 0 749 1102">
        <title>Next</title>
        <path style="fill: currentcolor;" d="M749 551l-551 551L0 904l353-353L0 198 198 0z"></path>
    </svg></a>
`

class Nav extends HTMLElement {
    connectedCallback() {
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define( 'tacocat-nav', Nav );