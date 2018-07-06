
class MouseEventHandler {
    constructor(getRects, canvas, repaintCanvas) {
        this._getRects = getRects
        this._canvas = canvas
        this._repaintCanvas = repaintCanvas
        
        this._lastPosition = null
        this._currentRect = null
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
        this._lastPosition = this._getPosition(event)
        this._currentRect = null
        let rects = this._getRects()
        for (let index = 0; index < rects.length; ++index) {
            let rect = rects[index]
            if (rect.contains(this._lastPosition.x, this._lastPosition.y)) {
                this._currentRect = rect
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
        this._lastPosition = null
        this._currentRect = null
    }
    
    _mouseMove(event) {
        if (this._lastPosition != null) {
            let from = this._lastPosition
            let to = this._getPosition(event)
            this._lastPosition = to
            this._drag(from, to)
        }
        event.preventDefault()
    }
    
    _mouseLeave() {
        this._lastPosition = null
        this._currentRect = null
    }
    
    _getPosition(event) {
        return {
            x: event.layerX,
            y: event.layerY
        };
    }
    
    _drag(from, to) {
        let changed = this._moveCurrentRect(from, to)
        if (changed) {
            this._repaintCanvas()
        }
    }
    
    _moveCurrentRect(from, to) {
        let changed = false
        if (this._currentRect != null) {
            this._currentRect.moveBy(to.x - from.x, to.y - from.y)
            changed = true
        }
        return changed
    }
}
