class React extends HTMLElement{
    
    constructor(){
        super()
        const template = document.querySelector("#course-template").content;
        const shadowRoot = this.attachShadow({mode:"open"})
        shadowRoot.appendChild(template.cloneNode(true))
    }
}










customElements.define("react-course",React)

