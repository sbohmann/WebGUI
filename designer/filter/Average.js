class Average {
    constructor(imageData, radius) {
        this._imageData = imageData
        this._radius = radius
    }

    run() {
        const data = this._imageData.data
        const radius = this._radius
        const width = this._imageData.width
        const height = this._imageData.height
        this.averagePixels(width, height, radius, data)
        return this._imageData
    }

    averagePixels(width, height, radius, data) {
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
