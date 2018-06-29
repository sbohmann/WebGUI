
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
    for (let n of Range.to(7)) {
        result.push({
            x: randomInt(500),
            y: randomInt(500),
            width: randomInt(200),
            height: randomInt(200)
        })
    }
    return result
}

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}

