
window.onload = () => new ContactsView().setup()

class ContactsView {
    setup() {
        this._contacts = new Contacts()
        this._createMainElement()
        this._createSearchBar()
        this._createList()
    }

    _createMainElement() {
        this._mainElement = document.createElement('div')
        this._mainElement.classList.add('contactsView')
        document.body.appendChild(this._mainElement)
    }

    _createSearchBar() {
        this._searchBar = new SearchBar()
        this._mainElement.appendChild(this._searchBar.mainElement)
        this._searchBar.textChanged = text => this._textChanged(text)
    }

    _createList() {
        this._list = new ContactListView(this._contacts)
        this._mainElement.appendChild(this._list.mainElement)
    }

    _textChanged(text) {
        this._contacts.filter = this._createFilterFromQuery(text)
        this._list.refresh()
    }

    _createFilterFromQuery(text) {
        let filter = new QueryFilter(text)
        return contact => filter.matches(contact)
    }
}
