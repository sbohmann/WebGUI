
window.onload = () => new FilteredItems()

class FilteredItems {
    constructor() {
        this.createMainElement()
    }

    searchTermChanged(value) {
        console.log('search term is now [' + value + ']')
    }

    createMainElement() {
        this._mainElement = document.getElementById('filtered-items-list')
        this.createSearchBar()
    }

    createSearchBar() {
        this._searchBar = new SearchBar(this)
        this._mainElement.appendChild(this._searchBar.mainElement)
    }
}
