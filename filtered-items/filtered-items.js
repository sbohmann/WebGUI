
window.onload = () => new FilteredItems()

class FilteredItems {
    constructor() {
        this._createMainElement()
    }

    searchTermChanged(value) {
        console.log('search term is now [' + value + ']')
    }

    _createMainElement() {
        this._mainElement = document.getElementById('filtered-items-list')
        this._createSearchBar()
    }

    _createSearchBar() {
        this._searchBar = new SearchBar(this)
        this._mainElement.appendChild(this._searchBar.mainElement)
    }
}
