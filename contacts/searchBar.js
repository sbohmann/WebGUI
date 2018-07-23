
class SearchBar {
    constructor() {
        this._createMainElement()
        this._createLabel()
        this._createTextInput()
        this._createSearchButton()
    }

    get mainElement() {
        return this._mainElement
    }

    _createMainElement() {
        this._mainElement = document.createElement('div')
    }

    _createLabel() {
        let label = document.createTextNode('Filter')
        this._mainElement.appendChild(label)
    }

    _createTextInput() {
        let input = document.createElement('input')
        input.type = 'text'
        this._mainElement.appendChild(input)
    }

    _createSearchButton() {
        let button = document.createElement('button')
        button.appendChild(document.createTextNode('Apply'))
        this._mainElement.appendChild(button)
    }
}
