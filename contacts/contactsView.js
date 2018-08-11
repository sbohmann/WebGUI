
const selectedClass = 'selected'

window.onload = () => new ContactsView().setup()

class ContactsView {
    setup() {
        this._contacts = new Contacts()
        this._createMainElement()
        this._createListView()
        this._createDetailsView()
    }

    _createMainElement() {
        this._mainElement = document.createElement('div')
        this._mainElement.classList.add('contactsView')
        document.body.appendChild(this._mainElement)
    }

    _createListView() {
        this._masterView = new ContactsMasterView()
        this._mainElement.appendChild(this._masterView.mainElement)
        this._masterView.selectionChanged = contact => this._showContact(contact)
    }

    _createDetailsView() {
        this._detailsView = new ContactsDetailsView(this._contacts)
        this._mainElement.appendChild(this._detailsView.mainElement)
    }

    _showContact(contact) {
        this._detailsView.setContact(contact)
    }
}
