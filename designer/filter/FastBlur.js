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
            this.horizontalBlur(width, height, radius, data)
            this.verticalBlur(width, height, radius, data)
        }
        return this._imageData
    }

    horizontalBlur(width, height, radius, data) {
        for (let y = 0; y < height; ++y) {
            let r = 0, g = 0, b = 0
            let num = 1
            let end = radius
            if (width > radius) {
                num += radius
            } else {
                num += width - 1
                end = width - 1
            }
            for (let x = 0; x <= end; ++x) {
                let index = (y * width + x) << 2
                r += data[index++]
                g += data[index++]
                b += data[index++]
            }
            for (let xCenter = 0; xCenter < width; ++xCenter) {
                if (xCenter > 0) {
                    if (xCenter - radius <= 0) {
                        ++num
                    } else {
                        let index = (y * width + xCenter - radius - 1) << 2
                        r -= data[index++]
                        g -= data[index++]
                        b -= data[index++]
                    }
                    if (xCenter + radius < width) {
                        let index = (y * width + xCenter + radius) << 2
                        r += data[index++]
                        g += data[index++]
                        b += data[index++]
                    } else {
                        --num
                    }
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
            let r = 0, g = 0, b = 0
            let num = 1
            let end = radius
            if (height > radius) {
                num += radius
            } else {
                num += height - 1
                end = height - 1
            }
            for (let y = 0; y <= end; ++y) {
                let index = (y * width + x) << 2
                r += data[index++]
                g += data[index++]
                b += data[index++]
            }
            for (let yCenter = 0; yCenter < height; ++yCenter) {
                if (yCenter > 0) {
                    if (yCenter - radius <= 0) {
                        ++num
                    } else {
                        let index = ((yCenter - radius - 1) * width + x) << 2
                        r -= data[index++]
                        g -= data[index++]
                        b -= data[index++]
                    }
                    if (yCenter + radius < width) {
                        let index = ((yCenter + radius) * width + x) << 2
                        r += data[index++]
                        g += data[index++]
                        b += data[index++]
                    } else {
                        --num
                    }
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
