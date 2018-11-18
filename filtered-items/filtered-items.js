
window.onload = () => new FilteredItems()

class FilteredItems {
    constructor() {
        this.createMainElement()
    }

    createMainElement() {
        this._mainElement = document.getElementById('filtered-items-list')
        this.createSearchBar()
    }

    createSearchBar() {
        this._searchBar = new SearchBar()
        this._mainElement.appendChild(this._searchBar.mainElement)
    }
}
