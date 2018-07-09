

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    get position() {
        return {
            x: this.x,
            y: this.y
        }
    }
    
    contains(x, y) {
        return this.xInRange(x) && this.yInRange(y)
    }
    
    xInRange(x) {
        return x >= this.x && x < this.x + this.width
    }
    
    yInRange(y) {
        return y >= this.y && y < this.y + this.height
    }
    
    moveTo(position) {
        this.x = position.x
        this.y = position.y
    }
    
    paint(context) {
        new RectanglePainter(context, this).run()
    }
}
