
window.onload = setup

function setup() {
    let editor = new Editor()
    let editorDiv = editor.mainElement
    document.body.appendChild(editorDiv)
    editorDiv.id = 'editor'
    console.log("setup finished")
}

function px(n) {
    return n + 'px'
}

class Editor {
    constructor() {
        this.createMainElement_()
        this.createCanvas_()
    }
    
    get mainElement() {
        return this.mainElement_
    }
    
    createMainElement_() {
        this.mainElement_ = document.createElement('div')
    }
    
    createCanvas_() {
        this.canvas_ = document.createElement('canvas')
        this.styleCanvas_()
        this.mainElement_.appendChild(this.canvas_)
        window.onresize = () => {
            console.log('onresize')
            this.resizeCanvas_()
        }
        setTimeout(() => this.resizeCanvas_(), 0)
    }
    
    styleCanvas_() {
        let style = this.canvas_.style
        style.backgroundColor = '#def'
        style.position = 'absolute'
        style.display = 'block'
        style.left = '0'
        style.top = '0'
        style.width = '100%'
        style.height = '100%'
    }
    
    resizeCanvas_() {
        this.canvas_.width = this.canvas_.clientWidth
        this.canvas_.height = this.canvas_.clientHeight
        console.log(this.canvas_.width + ' / ' + this.canvas_.height)
        this.paintCanvas_()
    }
    
    paintCanvas_() {
        let g = this.canvas_.getContext('2d')
        g.fillStyle = '#d66'
        g.lineWidth = 5
        g.beginPath()
        g.moveTo(100, 100)
        g.lineTo(200, 200)
        g.stroke()
    }
}
