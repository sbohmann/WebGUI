
window.onload = () => new ContactsView().setup()

class ContactsDetailsView {
    constructor() {
        this._contact = null
        this._createMainElement()
        this._createForm()
        this._updateUi()
    }

    get mainElement() {
        return this._mainElement
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
        this._firstNameLabel = this._createTextInput("First Name")
        this._lastNameLabel = this._createTextInput("Last Name")
    }

    _createTextInput(labelText) {
        let label = document.createElement('div')
        label.classList.add('formLabel')
        label.textContent = labelText
        this._mainElement.appendChild(label)
        let result = document.createElement('div')
        result.classList.add('formValue')
        this._mainElement.appendChild(result);
        return result
    }

    _updateUi() {
        if (this._contact != null) {
            this._setFormFields()
        } else {
            this._clearForm()
        }
    }

    _setFormFields() {
        this._firstNameLabel.textContent = this._contact.firstName
        this._lastNameLabel.textContent = this._contact.lastName
    }

    _clearForm() {
        this._firstNameLabel.textContent = ''
        this._lastNameLabel.textContent = ''
    }
}
