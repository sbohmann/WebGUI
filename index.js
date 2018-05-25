
window.onload = () => {
    new WebGui().run()
};

class WebGui {
    run() {
        this.createUi()
        this.layout()
    }
    
    createUi() {
        this.createMainDiv()
        document.body.appendChild(this.mainDiv)
        window.onresize = () => this.layout()
    }
    
    createMainDiv() {
        this.mainDiv = createDiv()
        this.mainDiv.style.backgroundColor = '#aabbcc'
        this.mainDiv.style.position = 'relative'
    }
    
    layout() {
        document.body.style.margin = '0'
        document.body.style.padding = '0'
        document.body.style.height = px(window.innerHeight)
        this.mainWidth = document.body.clientWidth
        this.mainHeight = document.body.clientHeight
        this.mainDiv.style.width = px(this.mainWidth)
        this.mainDiv.style.height = px(this.mainHeight)
        this.createColorfulRectangles()
    }
    
    createColorfulRectangles() {
        for (let index = 0; index < 100; ++index) {
            let w = this.randomW()
            let h = this.randomH()
            let x = this.randomX(w)
            let y = this.randomY(h)
            this.createColorfulRectangleWithBounds(x, y, w, h)
        }
    }
    
    createColorfulRectangleWithBounds(x, y, w, h) {
        console.log('x: ' + x + ', y: ' + y + ', w: ' + w + ', h: ' + h)
        let div = createDiv()
        div.style.position = 'absolute'
        div.style.left = px(x)
        div.style.top = px(y)
        div.style.width = px(w)
        div.style.height = px(h)
        let color = this.randomColor()
        div.style.backgroundColor = color
        div.appendChild(document.createTextNode(color))
        console.log(div.style)
        this.mainDiv.appendChild(div)
    }
    
    randomW() {
        return randomInt(this.mainWidth)
    }
    
    randomH() {
        return randomInt(this.mainHeight)
    }
    
    randomX(w) {
        return randomInt(this.mainWidth - w)
    }
    
    randomY(h) {
        return randomInt(this.mainHeight - h)
    }
    
    randomColor() {
        let red = randomInt(256)
        let green = randomInt(256)
        let blue = randomInt(256)
        return '#' + hex(red, 2) + hex(green, 2) + hex(blue, 2)
    }
}

function px(size) {
    let result = size + 'px';
    console.log(result)
    return result
}

function createDiv() {
    return document.createElement('div')
}

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}

function hex(value, minDigits) {
    let result = value.toString(16)
    if (result.length < minDigits) {
        result = padding(minDigits - result.length) + result
    }
    console.log(result)
    return result
}

function padding(n) {
    let result = ''
    for (let index = 0; index < n; ++index) {
        result += '0'
    }
    return result
}
