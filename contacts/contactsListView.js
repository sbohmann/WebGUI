
class ContactsListView {
    constructor(contacts) {
        this._contacts = contacts
        this._selectionChanged = null
        this._createMainElement(contacts)
        this._selectedLine = null
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
        line.onclick = () => this._contactSelected(line, contact)
        this._mainElement.appendChild(line)
    }

    _removeAllRows() {
        this._selectedLine = null
        while (this._mainElement.firstChild != null) {
            this._mainElement.removeChild(this._mainElement.firstChild)
        }
    }

    _contactSelected(line, contact) {
        this._markSelectedLine(line)
        this._callSelectionCallback(contact)
    }

    _markSelectedLine(line) {
        if (line !== this._selectedLine) {
            this._adjustLineSelectionMark(line)
        }
    }

    _adjustLineSelectionMark(line) {
        this._resetPreviouslySelectedLine()
        this._setNewSelectedLine(line)
    }

    _resetPreviouslySelectedLine() {
        if (this._selectedLine != null) {
            this._selectedLine.classList.remove(selectedClass)
        }
    }

    _setNewSelectedLine(line) {
        line.classList.add(selectedClass)
        this._selectedLine = line
    }

    _callSelectionCallback(contact) {
        if (this._selectionChanged != null) {
            this._selectionChanged(contact)
        }
    }
}
