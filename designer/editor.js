class Editor {
    constructor(rects) {
        this._rects = rects
        this._createView()
        this._createMOuseHandler()
    }
    
    get mainElement() {
        return this._mainElement
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
            console.log('onresize')
            this._resizeCanvas()
        }
        setTimeout(() => this._resizeCanvas(), 0)
    }
    
    _styleCanvas() {
        let style = this._canvas.style
        style.backgroundColor = '#def'
        style.position = 'absolute'
        style.display = 'block'
        style.left = '0'
        style.top = '0'
        style.width = '100%'
        style.height = '100%'
    }
    
    _resizeCanvas() {
        this._canvas.width = this._canvas.clientWidth
        this._canvas.height = this._canvas.clientHeight
        console.log(this._canvas.width + ' / ' + this._canvas.height)
        this._paintCanvas()
    }
    
    _paintCanvas() {
        let graphicsContext = this._canvas.getContext('2d')
        new EditorPainter(this._rects, this._canvas.width, this._canvas.height, graphicsContext).run()
    }
    
    _createMOuseHandler() {
        this._mouseEventHandler = new MouseEventHandler(
            this._rects,
            this._canvas,
            () => this._paintCanvas())
            .connect()
    }
}
