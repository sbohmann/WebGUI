
class EditorPainter {
    constructor(rects, width, height, graphicsContext) {
        this._rects = rects
        this._width = width
        this._height = height
        this._graphicsContext = graphicsContext
    }
    
    run() {
        this._paint(this._graphicsContext)
    }
    
    _paint(g) {
        this._rects.forEach(rect => {
            g.fillStyle = '#fff8f8'
            g.lineWidth = 5
            g.beginPath()
            g.moveTo(rect.x, rect.y)
            g.lineTo(rect.x + rect.width, rect.y)
            g.lineTo(rect.x + rect.width, rect.y + rect.height)
            g.lineTo(rect.x, rect.y + rect.height)
            g.lineTo(rect.x, rect.y)
            g.closePath()
            g.fill()
            g.stroke()
        })
    }
}
