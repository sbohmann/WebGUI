import {button, div, text} from './fluent-dom.js'

window.onload = () => {
    console.log('Hi! :)')
    let hiButton
    let mainElement = div()
        .withChildren(
            hiButton = button().withChildren(text('Hi!')))
    document.body.appendChild(mainElement.domNode)
    console.log(hiButton)
}
