
window.onload = () => new Designer().setup()

class Designer {
    setup() {
        this._createEditor()
        this._createSidebar()
    }
    
    _createEditor() {
        this._editor = new Editor()
        let editorDiv = this._editor.mainElement
        document.body.appendChild(editorDiv)
        editorDiv.id = 'editor'
    }
    
    _createSidebar() {
        this._sidebar = new Sidebar()
        this._sidebar.mainElement.id = 'sidebar'
        document.body.appendChild(this._sidebar.mainElement)
        
        this._sidebar.addHandler = () => this._addRectangle()
    }
    
    _addRectangle() {
        this._editor.addRectangle(
            this._cretaeRandomRectangle())
    }

    _cretaeRandomRectangle() {
        let width = 240
        let height = 280
        let x = (this._editor.width - width) / 2
        let y = (this._editor.height - height) / 2
        return new Rectangle(x, y, width, height)
    }
}
