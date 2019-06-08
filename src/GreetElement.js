import { ReactiveElement, symbols, template } from '../node_modules/elix/src/elix.js';

export default class GreetElement extends ReactiveElement {
  get [symbols.template] () {
    return template.html`Hello, <slot></slot>.`;
  }
}

customElements.define('greet-element', GreetElement);
