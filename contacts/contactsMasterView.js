
class ContactsMasterView {
    constructor() {
        this._contacts = new Contacts()
        this._createMainElement()
        this._createSearchBar()
        this._createList()
    }

    get mainElement() {
        return this._mainElement
    }

    set selectionChanged(value) {
        this._listView.selectionChanged = value
    }

    _createMainElement() {
        this._mainElement = document.createElement('div')
        this._mainElement.classList.add('contactsMasterView')
        document.body.appendChild(this._mainElement)
    }

    _createSearchBar() {
        this._searchBar = new SearchBar()
        this._mainElement.appendChild(this._searchBar.mainElement)
        this._searchBar.textChanged = text => this._textChanged(text)
    }

    _createList() {
        this._listView = new ContactsListView(this._contacts)
        this._mainElement.appendChild(this._listView.mainElement)
    }

    _textChanged(text) {
        this._contacts.filter = this._createFilterFromQuery(text)
        this._listView.refresh()
    }

    _createFilterFromQuery(text) {
        let filter = new QueryFilter(text)
        return contact => filter.matches(contact)
    }
}
