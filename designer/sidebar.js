
class Sidebar {
    constructor() {
        this.mainElement = document.createElement('div')
        this._createAddButton()
        this._createRemoveButton();
    }
    
    _createAddButton() {
        let button = this._createButton("Add Rectangle")
        button.onclick = () => alert("add button clicked")
        this.mainElement.appendChild(button)
    }
    
    _createRemoveButton() {
        let button = this._createButton("Remove Rectangle")
        button.onclick = () => alert("remove button clicked")
        this.mainElement.appendChild(button)
    }
    
    _createButton(text) {
        let button = document.createElement('button')
        this._styleButton(button)
        button.textContent = text
        return button
    }
    
    _styleButton(button) {
        let style = button.style
        style.width = '100%'
        style.height = '27px'
        style.marginBottom = '7px'
    }
}
