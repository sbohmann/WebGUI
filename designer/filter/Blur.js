class Blur {
    constructor(imageData) {
        this._imageData = imageData;
    }
    
    run() {
        for (let y = 0; y < this._imageData.height; ++y) {
            for (let x = 0; x < this._imageData.width; ++x) {
                this._blurPixel(x, y)
            }
        }
    }

    _blurPixel(centerX, centerY) {
        let num = 0, r = 0,  g = 0,  b = 0,  a = 0
        for (let yOffset = -15; yOffset <= 15; ++yOffset) {
            for (let xOffset = -15; xOffset <= 15; ++xOffset) {
                let x = centerX + xOffset
                let y = centerY + yOffset
                if (this.insideImage(x, y)) {
                    ++num
                    let index = this.index(x, y)
                    r += this._imageData.data[index++]
                    g += this._imageData.data[index++]
                    b += this._imageData.data[index++]
                    a += this._imageData.data[index++]
                }
            }
        }
        this.setPixelToAverage(centerX, centerY, num, r, g, b, a);
    }

    setPixelToAverage(x, y, num, r, g, b, a) {
        r /= num
        g /= num
        b /= num
        a /= num
        this.setPixel(x, y, r, g, b, a)
    }

    insideImage(x, y) {
        return x >= 0 && x < this._imageData.width &&
            y >= 0 && y < this._imageData.height;
    }

    setPixel(x, y, r, g, b, a) {
        let index = this.index(x, y)
        this._imageData.data[index++] = r
        this._imageData.data[index++] = g
        this._imageData.data[index++] = b
        this._imageData.data[index++] = a
    }

    index(x, y) {
        return 4 * (y * this._imageData.width + x);
    }
}
