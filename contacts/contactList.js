
class ContactList {
    constructor() {
        this._createMainElement()
    }

    _createMainElement() {
        this._mainElement = document.createTextNode('Contact List')
    }

    get mainElement() {
        return this._mainElement
    }
}
