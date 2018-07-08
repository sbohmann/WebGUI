
class Editor {
    constructor() {
        this._rects = []
        this._createView()
        this._createMouseHandler()
    }
    
    get mainElement() {
        return this._mainElement
    }
    
    get width() {
        return this._canvas.width
    }
    
    get height() {
        return this._canvas.height
    }
    
    addRectangle(rectangle) {
        this._rects.splice(0, 0, rectangle)
        this._paintCanvas()
    }
    
    _createView() {
        this._mainElement = document.createElement('div')
        this._createCanvas()
    }
    
    _createCanvas() {
        this._canvas = document.createElement('canvas')
        this._styleCanvas()
        this._mainElement.appendChild(this._canvas)
        window.onresize = () => {
            this._resizeCanvas()
        }
        setTimeout(() => this._resizeCanvas(), 0)
    }
    
    _styleCanvas() {
        let style = this._canvas.style
        style.backgroundColor = '#def'
        style.position = 'absolute'
        style.width = '100%'
        style.height = '100%'
    }
    
    _resizeCanvas() {
        this._setCanvasSize()
        this._callInitializationHandler()
        this._paintCanvas()
    }
    
    _setCanvasSize() {
        this._canvas.width = this._canvas.clientWidth
        this._canvas.height = this._canvas.clientHeight
    }
    
    _callInitializationHandler() {
        if (this._onInitialization !== undefined) {
            this._onInitialization(this._canvas.width, this._canvas.height)
        }
    }
    
    _paintCanvas() {
        let graphicsContext = this._canvas.getContext('2d')
        new EditorPainter(this._rects, this._canvas.width, this._canvas.height, graphicsContext).run()
    }
    
    _createMouseHandler() {
        new MouseEventHandler(
            () => this._rects,
            this._canvas,
            () => this._paintCanvas())
            .connect()
    }
}
