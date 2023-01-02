// .js

class Tooltip extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }); // enables shadowDOM !
      this.tooltip = document.createElement("div");
  
      this.tooltipText = "Dummy Tooltip !";
    }
  
    connectedCallback() {
      if (this.hasAttribute("text")) {
        this.tooltipText = this.getAttribute("text");
      }
  
      let tooltipIcon = document.createElement("span");
      tooltipIcon.innerText = "(?)";
      this.style.position = "relative";
      this.style.cursor = "pointer";
  
      tooltipIcon.addEventListener("mouseenter", this.showTooltip.bind(this));
      tooltipIcon.addEventListener("mouseleave", this.hideTooltip.bind(this));
  
      this.shadowRoot.appendChild(tooltipIcon);
    }
  
    showTooltip() {
      //this.tooltip = document.createElement("div");
      this.tooltip.innerText = this.tooltipText;
      this.tooltip.style.backgroundColor = "black";
      this.tooltip.style.width = "20em";
      this.tooltip.style.padding = "3px";
  
      this.tooltip.style.color = "white";
      this.tooltip.style.fontSize = "8px";
      this.tooltip.style.border = "1px solid black";
      this.tooltip.style.borderRadius = "2px";
  
      this.tooltip.style.position = "absolute";
      this.tooltip.style.left = "20px";
      this.tooltip.style.top = "-15px";
  
      this.shadowRoot.appendChild(this.tooltip);
    }
  
    hideTooltip() {
      this.shadowRoot.removeChild(this.tooltip);
    }
  }
  
  customElements.define("uc-tooltip", Tooltip);
  