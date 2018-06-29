
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

class Range {
    constructor(inclusiveMinimum, exclusiveMaximum) {
        this._inclusiveMinimum = inclusiveMinimum
        this._exclusiveMaximum = exclusiveMaximum
        this[Symbol.iterator] = () => this._createIterator()
    }
    
    static to(exclusiveMaximum) {
        return new Range(0, exclusiveMaximum)
    }
    
    _createIterator() {
        return {
            current: this._inclusiveMinimum,
            last: this._exclusiveMaximum,
            
            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        }
    }
}
