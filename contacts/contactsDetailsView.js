
window.onload = () => new ContactsView().setup()

class ContactsDetailsView {
    constructor() {
        this._contact = null
        this._createMainElement()
        this._createForm()
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

    _createForm() {
        this._firstNameLabel = this._createLabel()
        this._lastNameLabel = this._createLabel()
    }

    _createLabel() {
        let result = document.createElement('div')
        result.classList.add('formLabel')
        return result
    }

    _updateUi() {
        this._firstNameLabel.textContent = 'Firstname'
        this._firstNameLabel.textContent = 'Lastname'
    }
}
