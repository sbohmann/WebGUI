
class ContactsListView {
    constructor(contacts) {
        this._contacts = contacts
        this._selectionChanged = null
        this._createMainElement(contacts)
    }

    get mainElement() {
        return this._mainElement
    }

    set selectionChanged(value) {
        this._selectionChanged = value
    }

    refresh() {
        this._removeAllRows()
        this._addRows()
    }

    _createMainElement() {
        this._mainElement = document.createElement('table')
        this._mainElement.classList.add('contactsListView')
        this._addRows()
    }

    _addRows() {
        let lines = 0
        for (let contact of this._contacts) {
            this._addRow(contact)
            if (++lines === 100) {
                break
            }
        }
    }

    _addRow(contact) {
        let line = document.createElement('tr')
        line.classList.add('contactLine')
        let firtNameSpan = document.createElement('td')
        firtNameSpan.textContent = contact.firstName
        line.appendChild(firtNameSpan)
        let lastNameSpan = document.createElement('td')
        lastNameSpan.textContent = contact.lastName
        line.appendChild(lastNameSpan)
        line.onclick = () => this._contactSelected(contact)
        this._mainElement.appendChild(line)
    }

    _removeAllRows() {
        while (this._mainElement.firstChild != null) {
            this._mainElement.removeChild(this._mainElement.firstChild)
        }
    }

    _contactSelected(contact) {
        if (this._selectionChanged != null) {
            this._selectionChanged(contact)
        }
    }
}
