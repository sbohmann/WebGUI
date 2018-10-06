class FastBlur {
    constructor(imageData, radius) {
        this._imageData = imageData
        this._radius = radius
    }

    run() {
        const data = this._imageData.data
        const radius = this._radius
        const width = this._imageData.width
        const height = this._imageData.height
        for (let n = 1; n <= 3; ++n) {
            this.horizontalBlur(height, width, radius, data)
            this.verticalBlur(width, height, radius, data)
        }
        return this._imageData
    }

    horizontalBlur(height, width, radius, data) {
        for (let y = 0; y < height; ++y) {
            for (let xCenter = 0; xCenter < width; ++xCenter) {
                let num = 1
                let start = xCenter - radius
                let end = xCenter + radius
                if (xCenter >= radius) {
                    num += radius
                } else {
                    num += xCenter
                    start = 0
                }
                if (xCenter < width - radius) {
                    num += radius
                } else {
                    num += width - xCenter - 1
                    end = width - 1
                }
                let r = 0, g = 0, b = 0
                for (let x = start; x <= end; ++x) {
                    let index = (y * width + x) << 2
                    r += data[index++]
                    g += data[index++]
                    b += data[index++]
                }
                let index = (y * width + xCenter) << 2
                data[index++] = r / num
                data[index++] = g / num
                data[index++] = b / num
                data[index++] = 0xff
            }
        }
    }

    verticalBlur(width, height, radius, data) {
        for (let x = 0; x < width; ++x) {
            for (let yCenter = 0; yCenter < height; ++yCenter) {
                let num = 1
                let start = yCenter - radius
                let end = yCenter + radius
                if (yCenter >= radius) {
                    num += radius
                } else {
                    num += yCenter
                    start = 0
                }
                if (yCenter < height - radius) {
                    num += radius
                } else {
                    num += height - yCenter - 1
                    end = height - 1
                }
                let r = 0, g = 0, b = 0
                for (let y = start; y <= end; ++y) {
                    let index = (y * width + x) << 2
                    r += data[index++]
                    g += data[index++]
                    b += data[index++]
                }
                let index = (yCenter * width + x) << 2
                data[index++] = r / num
                data[index++] = g / num
                data[index++] = b / num
                data[index++] = 0xff
            }
        }
    }
}
