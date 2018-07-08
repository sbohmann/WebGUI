
class EditorPainter {
    constructor(rects, width, height, graphicsContext) {
        this._rects = rects
        this._width = width
        this._height = height
        this._g = graphicsContext
    }
    
    run() {
        this._paint()
    }
    
    _paint() {
        this._clearBackground()
        this._paintBorder()
        this._paintRects()
    }
    
    _clearBackground() {
        this._g.clearRect(0, 0, this._width, this._height);
    }
    
    _paintBorder() {
        this._setBorderStyle()
        this._paintBorderRect()
    }
    
    _setBorderStyle() {
        this._g.strokeStyle = '#99cc99'
        this._g.lineWidth = 12
    }
    
    _paintBorderRect() {
        this._g.beginPath()
        this._g.moveTo(0, 0)
        this._g.lineTo(0 + this._width, 0)
        this._g.lineTo(0 + this._width, 0 + this._height)
        this._g.lineTo(0, 0 + this._height)
        this._g.lineTo(0, 0)
        this._g.closePath()
        this._g.stroke()
    }
    
    _paintRects() {
        this._forEachRectReverse(rect => {
            rect.paint(this._g)
        })
    }
    
    _forEachRectReverse(func) {
        for (let index = this._rects.length - 1; index >= 0; --index) {
            func(this._rects[index])
        }
    }
}
