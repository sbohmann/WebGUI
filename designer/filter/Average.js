class Average {
    constructor(imageData) {
        this._imageData = imageData
    }

    run() {
        const data = this._imageData.data
        const width = this._imageData.width
        const height = this._imageData.height
        this.averagePixels(width, height, data)
        return this._imageData
    }

    averagePixels(width, height, data) {
        let r = 0, g = 0, b = 0
        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                let index = (y * width + x) << 2
                r += data[index++]
                g += data[index++]
                b += data[index++]
            }
        }
        
        let num = width * height
        let rAverage = r / num
        let gAverage = g / num
        let bAverage = b / num
        
        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                let index = (y * width + x) << 2
                data[index++] = rAverage
                data[index++] = gAverage
                data[index++] = bAverage
                data[index++] = 0xff
            }
        }
    }
}
