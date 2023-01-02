// .js

//  1. define the custom element using a class
//  2. registering/exposing the custom element to browser
//  3. instanciating the custom element

class HelloWorld extends HTMLElement {
    constructor() {
      super();
      console.log("Hello Web Component !");
    }
  }
  // define(usage(tagname),definition)
  customElements.define("hello-world", HelloWorld);
 