
class SearchBar {
    constructor() {
        this._mainElement = document.createElement('div')
        this._createSearchInputField()
        this._createAvailableOnlyCheckbox()
    }

    get mainElement() {
        return this._mainElement
    }

    _createSearchInputField() {
        let label = document.createElement('label')
        label.textContent = 'Search'
        let textField = document.createElement('input')
        textField.type = 'text'
        textField.oninput = () => this._searchTermChanged(textField.value)
        label.htmlFor = textField
        this._mainElement.appendChild(label)
        this._mainElement.appendChild(textField)
    }

    _searchTermChanged(value) {
        console.log('search term is now [' + value + ']')
    }

    _createAvailableOnlyCheckbox() {

    }
}
