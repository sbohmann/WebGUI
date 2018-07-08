
class RectanglePainter {
    constructor(context, rectangle) {
        this._g = context
        this._rect = rectangle
    }
    
    run() {
        this._setStyle()
        this._createRectPath()
        this._g.fill()
        this._g.stroke()
    }
    
    _setStyle() {
        this._g.fillStyle = '#fff8f8'
        this._g.strokeStyle = 'black'
        this._g.lineWidth = 5
    }
    
    _createRectPath() {
        this._g.beginPath()
        this._g.moveTo(this._rect.x, this._rect.y)
        this._g.lineTo(this._rect.x + this._rect.width, this._rect.y)
        this._g.lineTo(this._rect.x + this._rect.width, this._rect.y + this._rect.height)
        this._g.lineTo(this._rect.x, this._rect.y + this._rect.height)
        this._g.lineTo(this._rect.x, this._rect.y)
        this._g.closePath()
    }
}
