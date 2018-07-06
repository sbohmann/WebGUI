class MouseEventHandler {
    constructor(getRects, canvas, repaintCanvas) {
        this._getRects = getRects
        this._canvas = canvas
        this._repaintCanvas = repaintCanvas
        
        this._lastPosition = null
    }
    
    connect() {
        this._canvas.onmousedown = event => this._mouseDown(event)
        this._canvas.onmouseup = event => this._mouseUp(event)
        this._canvas.onmousemove = event => this._mouseMove(event)
        this._canvas.onmouseleave = event => this._mouseLeave(event)
        
        this._canvas.ontouchstart = event => this._mouseDown(event)
        this._canvas.ontouchmove = event => this._mouseMove(event)
        this._canvas.ontouchEnd = event => this._mouseUp(event)
    }
    
    _mouseDown(event) {
        this._lastPosition = this._getPosition(event)
    }
    
    _mouseUp() {
        this._lastPosition = null
    }
    
    _mouseMove(event) {
        if (this._lastPosition != null) {
            let from = this._lastPosition
            let to = this._getPosition(event)
            this._lastPosition = to
            this._drag(from, to)
        }
    }
    
    _mouseLeave() {
        this._lastPosition = null
    }
    
    _getPosition(event) {
        return {
            x: event.layerX,
            y: event.layerY
        };
    }
    
    _drag(from, to) {
        let changed = this.moveRects(from, to)
        if (changed) {
            this._repaintCanvas()
        }
    }
    
    moveRects(from, to) {
        let changed = false
        for (let rect of this._getRects()) {
            if (rect.contains(from.x, from.y)) {
                rect.moveBy(to.x - from.x, to.y - from.y)
                changed = true
            }
        }
        return changed
    }
}
