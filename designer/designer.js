
window.onload = setup

function setup() {
    let editor = new Editor(createDummyRects())
    let editorDiv = editor.mainElement
    document.body.appendChild(editorDiv)
    editorDiv.id = 'editor'
    console.log("setup finished")
}

function createDummyRects() {
    let result = []
    for (let n of Range.to(177)) {
        result.push({
            x: randomInt(500),
            y: randomInt(500),
            width: randomInt(200),
            height: randomInt(200),
            
            contains(x, y) {
                console.log("x: " + x + ", y: " + y)
                console.log(this)
                let xInRange = x >= this.x && x < this.x + this.width
                let yInRange = y >= this.y && y < this.y + this.height
                return xInRange && yInRange
            },
            
            moveBy(deltaX, deltaY) {
                this.x += deltaX
                this.y += deltaY
            }
        })
    }
    return result
}

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}
