
class SearchBar {
    constructor() {
        this._textChanged = null

        this._createMainElement()
        this._createLabel()
        this._createTextInput()
        this._createSearchButton()
    }

    get mainElement() {
        return this._mainElement
    }

    set textChanged(value) {
        this._textChanged = value
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
        this._textField = input
    }

    _createSearchButton() {
        let button = document.createElement('button')
        button.appendChild(document.createTextNode('Apply'))
        this._mainElement.appendChild(button)
        button.onclick = () => this._search()
    }

    _search() {
        if (this._textChanged != null) {
            this._textChanged(this._textField.value)
        }
    }
}
