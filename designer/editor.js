
class Editor {
    constructor(rects) {
        this._rects = rects
        this.createMainElement_()
        this.createCanvas_()
    }
    
    get mainElement() {
        return this._mainElement
    }
    
    createMainElement_() {
        this._mainElement = document.createElement('div')
    }
    
    createCanvas_() {
        this._canvas = document.createElement('canvas')
        this.styleCanvas_()
        this._mainElement.appendChild(this._canvas)
        window.onresize = () => {
            console.log('onresize')
            this.resizeCanvas_()
        }
        setTimeout(() => this.resizeCanvas_(), 0)
    }
    
    styleCanvas_() {
        let style = this._canvas.style
        style.backgroundColor = '#def'
        style.position = 'absolute'
        style.display = 'block'
        style.left = '0'
        style.top = '0'
        style.width = '100%'
        style.height = '100%'
    }
    
    resizeCanvas_() {
        this._canvas.width = this._canvas.clientWidth
        this._canvas.height = this._canvas.clientHeight
        console.log(this._canvas.width + ' / ' + this._canvas.height)
        this.paintCanvas_()
    }
    
    paintCanvas_() {
        let graphicsContext = this._canvas.getContext('2d')
        new EditorPainter(this._rects, this._canvas.width, this._canvas.height, graphicsContext).run()
    }
}
