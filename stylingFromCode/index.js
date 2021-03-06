
window.onload = () => {
    new WebGui().run()
};

class Window {
    constructor() {
        this.div = document.createElement('div')
        this.div.style.position = 'absolute'
    }
    
    setBounds(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.div.style.left = px(x)
        this.div.style.top = px(y)
        this.div.style.width = px(width)
        this.div.style.height = px(height)
    }
    
    setSize(width, height) {
        this.width = width
        this.height = height
        this.div.style.width = px(width)
        this.div.style.height = px(height)
    }
    
    add(child) {
        if (child instanceof Window) {
            this.div.appendChild(child.div)
        } else {
            this.div.appendChild(child)
        }
    }
}

class WebGui {
    run() {
        this.createUi()
        this.layout()
    }
    
    createUi() {
        this.createMainDiv()
        document.body.appendChild(this.mainWindow.div)
        window.onresize = () => this.layout()
    }
    
    createMainDiv() {
        this.mainWindow = new Window()
        this.mainWindow.div.style.backgroundColor = '#aabbcc'
        this.mainWindow.div.style.position = 'relative'
    }
    
    layout() {
        document.body.style.margin = '0'
        document.body.style.padding = '0'
        document.body.style.height = px(window.innerHeight)
        this.mainWindow.setSize(document.body.clientWidth, document.body.clientHeight)
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
        let window = new Window()
        window.setBounds(x, y, w, h)
        let color = this.randomColor()
        window.div.style.backgroundColor = color
        window.add(document.createTextNode(color))
        this.mainWindow.add(window)
    }
    
    randomW() {
        return randomInt(this.mainWindow.width)
    }
    
    randomH() {
        return randomInt(this.mainWindow.height)
    }
    
    randomX(w) {
        return randomInt(this.mainWindow.width - w)
    }
    
    randomY(h) {
        return randomInt(this.mainWindow.height - h)
    }
    
    randomColor() {
        let red = randomInt(256)
        let green = randomInt(256)
        let blue = randomInt(256)
        return '#' + hex(red, 2) + hex(green, 2) + hex(blue, 2)
    }
}

function px(size) {
    return size + 'px';
}

function randomInt(exclusiveMaximum) {
    return Math.floor(Math.random() * exclusiveMaximum);
}

/**
 * @param {number} value
 * @param minDigits
 * @returns {string}
 */
function hex(value, minDigits) {
    let result = value.toString(16)
    if (result.length < minDigits) {
        result = padding(minDigits - result.length) + result
    }
    return result
}

function padding(n) {
    let result = ''
    for (let index = 0; index < n; ++index) {
        result += '0'
    }
    return result
}
