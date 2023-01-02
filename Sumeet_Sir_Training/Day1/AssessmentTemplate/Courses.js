
class PythonCourse extends HTMLElement{
  constructor(){
    super()
    const template = document.getElementById("pythonCourse").content;
    const shadowRoot= this.attachShadow({mode:"open"})// open will display the custom element content in the browser
    shadowRoot.appendChild(template.cloneNode(true))
  }
}


customElements.define("python-element",PythonCourse)
  
  
  