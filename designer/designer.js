
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
        let width = 240
        let height = 280
        let x = (this._editor.width - width) / 2
        let y = (this._editor.height - height) / 2
        let rectangle = new Rectangle(x, y, width, height);
        this._editor.addRectangle(rectangle)
    }
}
