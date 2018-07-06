
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
        this._editor.onInitialization = (canvasWidth, canvasHeight) => {
            this._editor.rects = this._createDummyRects(canvasWidth, canvasHeight)
        }
    }
    
    _createSidebar() {
        this._sidebar = new Sidebar()
        this._sidebar.mainElement.id = 'sidebar'
        document.body.appendChild(this._sidebar.mainElement)
    }
    
    _createDummyRects(canvasWidth, canvasHeight) {
        let result = []
        Range.to(177).forEach(() => {
            let width = 10 + randomInt(200)
            let height = 10 + randomInt(200)
            let x = 20 + randomInt(canvasWidth - 40 - width)
            let y = 20 + randomInt(canvasHeight - 40 - height)
            result.push(this._createRectangle(x, y, width, height))
        })
        return result
    }
    
    _createRectangle(x, y, width, height) {
        return {
            x: x,
            y: y,
            width: width,
            height: height,
            
            contains(x, y) {
                let xInRange = x >= this.x && x < this.x + this.width
                let yInRange = y >= this.y && y < this.y + this.height
                return xInRange && yInRange
            },
            
            moveBy(deltaX, deltaY) {
                this.x += deltaX
                this.y += deltaY
            }
        }
    }
}

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}
