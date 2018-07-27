
window.onload = () => new ContactsView().setup()

class ContactsView {
    setup() {
        this._contacts = new Contacts()
        this._createSearchBar()
        this._createList()
    }

    _createSearchBar() {
        this._searchBar = new SearchBar()
        document.body.appendChild(this._searchBar.mainElement)
        this._searchBar.textChanged = text => this._textChanged(text)
    }

    _createList() {
        this._list = new ContactListView(this._contacts)
        document.body.appendChild(this._list.mainElement)
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
