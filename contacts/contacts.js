
window.onload = () => new Contacts().setup()

class Contacts {
    setup() {
        this._createSearchBar()
        this._createList()
    }

    _createSearchBar() {
        this._searchBar = new SearchBar()
        document.body.appendChild(this._searchBar.mainElement)
    }

    _createList() {
        this._list = new ContactList()
        document.body.appendChild(this._list.mainElement)
    }
}
