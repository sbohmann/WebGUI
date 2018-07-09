
class MouseEventHandler {
    constructor(getRects, canvas, repaintCanvas) {
        this._getRects = getRects
        this._canvas = canvas
        this._repaintCanvas = repaintCanvas
        
        this._startPosition = null
        this._currentRect = null
        this._currrentRectStartPosition = null
    }
    
    connect() {
        this._canvas.onmousedown = event => this._mouseDown(event)
        this._canvas.onmouseup = event => this._mouseUp(event)
        this._canvas.onmousemove = event => this._mouseMove(event)
        this._canvas.onmouseleave = event => this._mouseLeave(event)
        
        this._canvas.ontouchstart = event => this._mouseDown(event)
        this._canvas.ontouchmove = event => this._mouseMove(event)
        this._canvas.ontouchend = event => this._mouseUp(event)
    }
    
    _mouseDown(event) {
        this._startPosition = this._getPosition(event)
        this._currentRect = null
        let rects = this._getRects()
        for (let index = 0; index < rects.length; ++index) {
            let rect = rects[index]
            if (rect.contains(this._startPosition.x, this._startPosition.y)) {
                this._currentRect = rect
                this._currrentRectStartPosition = rect.position
                this.moveRectToFront(rects, index)
                return
            }
        }
    }
    
    moveRectToFront(rects, index) {
        this.checkIndex(rects, index)
        if (index !== 0) {
            let rect = rects[index]
            rects.splice(index, 1)
            rects.splice(0, 0, rect)
            this._repaintCanvas()
        }
    }
    
    checkIndex(rects, index) {
        if (index < 0 || index >= rects.length) {
            throw "Index [" + index + "] out of bounds for array length " + rects.length
        }
    }
    
    _mouseUp() {
        this._startPosition = null
        this._currentRect = null
        this._currrentRectStartPosition = null
    }
    
    _mouseMove(event) {
        if (this._startPosition != null) {
            let to = this._getPosition(event)
            this._dragCurrentRectTo(from, to)
        }
        event.preventDefault()
    }
    
    _mouseLeave() {
        this._startPosition = null
        this._currentRect = null
        this._currrentRectStartPosition = null
    }
    
    _getPosition(event) {
        return {
            x: event.layerX,
            y: event.layerY
        };
    }
    
    _dragCurrentRectTo(position) {
        let changed = this._moveCurrentRectTo(position)
        if (changed) {
            this._repaintCanvas()
        }
    }
    
    _moveCurrentRectTo(position) {
        let changed = false
        if (this._currentRect != null) {
            this._currentRect.moveTo(position)
            changed = true
        }
        return changed
    }
}
