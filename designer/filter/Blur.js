class Blur {
    constructor(imageData, radius) {
        this._imageData = imageData;
        this._data = imageData.data
        this._radius = radius
    }
    
    run() {
        for (let y = 0; y < this._imageData.height; ++y) {
            for (let x = 0; x < this._imageData.width; ++x) {
                this._blurPixel(x, y)
            }
        }
        return this._imageData
    }

    _blurPixel(centerX, centerY) {
        let num = 0, r = 0,  g = 0,  b = 0,  a = 0
        for (let yOffset = -this._radius; yOffset <= this._radius; ++yOffset) {
            for (let xOffset = -this._radius; xOffset <= this._radius; ++xOffset) {
                let x = centerX + xOffset
                let y = centerY + yOffset
                if (this._insideImage(x, y)) {
                    ++num
                    let index = this._index(x, y)
                    r += this._data[index++]
                    g += this._data[index++]
                    b += this._data[index++]
                    a += this._data[index++]
                }
            }
        }
        this._setPixelToAverage(centerX, centerY, num, r, g, b, a)
    }

    _setPixelToAverage(x, y, num, r, g, b, a) {
        r /= num
        g /= num
        b /= num
        a /= num
        this._setPixel(x, y, r, g, b, a)
    }

    _insideImage(x, y) {
        return x >= 0 && x < this._imageData.width &&
            y >= 0 && y < this._imageData.height
    }

    _setPixel(x, y, r, g, b, a) {
        let index = this._index(x, y)
        this._data[index++] = r
        this._data[index++] = g
        this._data[index++] = b
        this._data[index++] = a
    }

    _index(x, y) {
        return 4 * (y * this._imageData.width + x)
    }
}
