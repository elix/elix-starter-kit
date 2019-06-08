import * as symbols from '../node_modules/elix/src/symbols.js';
import * as template from '../node_modules/elix/src/template.js';
import ReactiveElement from '../node_modules/elix/src/ReactiveElement.js';

export default class GreetElement extends ReactiveElement {
  get [symbols.template] () {
    return template.html`Hello, <slot></slot>.`;
  }
}

customElements.define('greet-element', GreetElement);
