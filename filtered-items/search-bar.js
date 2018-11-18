
class SearchBar {
    constructor(searchtermChangeHandler, availableOnlyHandler) {
        this._searchTermChangeHandler = searchtermChangeHandler
        this._availableOnlyHandler = availableOnlyHandler
        this._mainElement = document.createElement('div')
        this._createSearchInputField()
        this._createAvailableOnlyCheckbox()
    }

    get mainElement() {
        return this._mainElement
    }

    _createSearchInputField() {
        let paragraph = document.createElement('p')
        let label = document.createElement('label')
        label.textContent = 'Search'
        let textField = document.createElement('input')
        textField.type = 'text'
        textField.oninput = () => this._searchTermChanged(textField.value)
        label.htmlFor = textField
        paragraph.appendChild(label)
        paragraph.appendChild(textField)
        this._mainElement.appendChild(paragraph)
    }

    _searchTermChanged(value) {
        value = value.trim().toLowerCase()
        if (this._previousSearchTerm !== value) {
            this._searchTermChangeHandler(value)
        }
        this._previousSearchTerm = value
    }

    _createAvailableOnlyCheckbox() {
        let paragraph = document.createElement('p')
        let label = document.createElement('label')
        label.textContent = 'Available Only'
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.onchange = () => this._availableOnlyHandler(checkbox.checked)
        label.htmlFor = checkbox
        paragraph.appendChild(label)
        paragraph.appendChild(checkbox)
        this._mainElement.appendChild(paragraph)
    }
}
