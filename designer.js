
window.onload = setup

function setup() {
    let editor = new Editor()
    let editorDiv = editor.mainElement
    document.body.appendChild(editorDiv)
    editorDiv.id = 'editor'
    console.log("setup finished")
}

class Editor {
    constructor() {
        this.mainElement_ = document.createElement('div')
    }
    
    get mainElement() {
        return this.mainElement_
    }
}
