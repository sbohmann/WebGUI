
window.onload = setup

function setup() {
    let rects = []
    let editor = new Editor(rects)
    let editorDiv = editor.mainElement
    document.body.appendChild(editorDiv)
    editorDiv.id = 'editor'
    editor.onInitialization = (canvasWidth, canvasHeight) => {
        editor.rects = createDummyRects(canvasWidth, canvasHeight)
    }
}

function createDummyRects(canvasWidth, canvasHeight) {
    let result = []
    for (let n of Range.to(177)) {
        let width = 10 + randomInt(200)
        let height = 10 + randomInt(200)
        let x = 20 + randomInt(canvasWidth - 40 - width)
        let y = 20 + randomInt(canvasHeight - 40 - height)
        result.push(createRectangle(x, y, width, height))
    }
    return result
}

function createRectangle(x, y, width, height) {
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

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}
