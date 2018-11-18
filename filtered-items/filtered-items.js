
window.onload = () => new FilteredItems()

class FilteredItems {
    constructor() {
        this._createMainElement()
    }

    _createMainElement() {
        this._mainElement = document.getElementById('filtered-items-list')
        this._createSearchBar()
    }

    _createSearchBar() {
        this._searchBar = new SearchBar(
            value => this._searchTermChanged(value),
            value => this._availableOnlyChanged(value))
        this._mainElement.appendChild(this._searchBar.mainElement)
    }

    _searchTermChanged(value) {
        console.log('search term is now [' + value + ']')
    }

    _availableOnlyChanged(value) {
        console.log('available only is now [' + value + ']')
    }
}
