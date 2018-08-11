
window.onload = () => new ContactsView().setup()

class ContactsDetailsView {
    constructor() {
        this._contact = null
        this._createMainElement()
    }

    setContact(contact) {
        this._contact = contact
        this._updateUi()
    }

    _createMainElement() {
        this._mainElement = document.createElement('div')
        this._mainElement.classList.add('contactsDetailsView')
        document.body.appendChild(this._mainElement)
    }

    _updateUi() {

    }
}
