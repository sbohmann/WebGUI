
class ContactListView {
    constructor(contacts) {
        this._contacts = contacts
        this._createMainElement(contacts)
    }

    get mainElement() {
        return this._mainElement
    }

    refresh() {
        this._removeAllRows()
        this._addRows()
    }

    _createMainElement() {
        this._mainElement = document.createElement('table')
        this._mainElement.style.backgroundColor = '#def'
        this._addRows()
    }

    _addRows() {
        for (let contact of this._contacts) {
            this._addRow(contact)
        }
    }

    _addRow(contact) {
        let line = document.createElement('tr')
        let firtNameSpan = document.createElement('td')
        firtNameSpan.textContent = contact.firstName
        line.appendChild(firtNameSpan)
        let lastNameSpan = document.createElement('td')
        lastNameSpan.textContent = contact.lastName
        line.appendChild(lastNameSpan)
        this._mainElement.appendChild(line)
    }

    _removeAllRows() {
        while (this._mainElement.firstChild != null) {
            this._mainElement.removeChild(this._mainElement.firstChild)
        }
    }
}
