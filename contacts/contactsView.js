
window.onload = () => new ContactsView().setup()

class ContactsView {
    setup() {
        this._contacts = new DummyContacts(10000).value
        this._createSearchBar()
        this._createList()
    }

    _createSearchBar() {
        this._searchBar = new SearchBar()
        document.body.appendChild(this._searchBar.mainElement)
    }

    _createList() {
        this._list = new ContactList(this._contacts)
        document.body.appendChild(this._list.mainElement)
    }
}
