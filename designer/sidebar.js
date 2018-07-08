
class Sidebar {
    constructor() {
        this.mainElement = document.createElement('div')
        this._createAddButton()
        this._createRemoveButton();
        
        this._addHandler = null
    }
    
    set addHandler(value) {
        this._addHandler = value
    }
    
    _createAddButton() {
        let button = this._createButton("Add Rectangle")
        button.onclick = () => this._addHandler && this._addHandler()
    }
    
    _createRemoveButton() {
        this._createButton("Remove Rectangle")
    }
    
    _createButton(text) {
        let button = document.createElement('button')
        this._styleButton(button)
        button.textContent = text
        this.mainElement.appendChild(button)
        return button
    }
    
    _styleButton(button) {
        let style = button.style
        style.width = '100%'
        style.height = '27px'
        style.marginBottom = '7px'
    }
}
