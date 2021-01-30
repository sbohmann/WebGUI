import {div, element, text} from '../../fluent/fluent-dom.js'

class Painter extends HTMLElement {
    constructor() {
        super()
        let styleNode
        this._root = div()
            .withChildren(
                styleNode = element('style')
                    .withChildren(text(`@import "painter/painter.css";`)),
                text('Hi!'))
            .domNode
        this.attachShadow({mode: 'closed'}).appendChild(this._root)

    }
}

customElements.define('painter-element', Painter)
