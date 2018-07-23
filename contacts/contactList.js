
class ContactList {
    constructor(contacts) {
        this._contacts = contacts
        this._createMainElement(contacts)
    }

    get mainElement() {
        return this._mainElement
    }

    _createMainElement() {
        this._mainElement = document.createElement('table')
        this._mainElement.style.backgroundColor = '#def'
        this._addAddressLines()
    }

    _addAddressLines() {
        for (let contact of this._contacts) {
            this._addAddressLine(contact)
        }
    }

    _addAddressLine(contact) {
        let line = document.createElement('tr')
        let firtNameSpan = document.createElement('td')
        firtNameSpan.textContent = contact.firstName
        line.appendChild(firtNameSpan)
        let lastNameSpan = document.createElement('td')
        lastNameSpan.textContent = contact.lastName
        line.appendChild(lastNameSpan)
        this._mainElement.appendChild(line)
    }
}
