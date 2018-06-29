
class EditorPainter {
    constructor(rect, width, height, graphicsContext) {
        this._width = width
        this._height = height
        this._graphicsContext = graphicsContext
    }
    
    run() {
        this._paint(this._graphicsContext)
    }
    
    _paint(g) {
        g.fillStyle = '#d66'
        g.lineWidth = 5
        g.beginPath()
        g.moveTo(100, 100)
        g.lineTo(200, 200)
        g.stroke()
    }
}
