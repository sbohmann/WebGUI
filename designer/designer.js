
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
    }
}

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}
