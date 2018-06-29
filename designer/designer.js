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
        console.log(n)
    }
    return result
}

class Range {
    constructor(fromInclusive, toExclusive) {
        this._fromInclusive = fromInclusive
        this._toExclusive = toExclusive
        this[Symbol.iterator] = () => this._createIterator()
    }
    
    static to(toExclusive) {
        return new Range(0, toExclusive)
    }
    
    _createIterator() {
        return {
            current: this._fromInclusive,
            last: this._toExclusive,
            
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
