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
            FastBlur.horizontalBlur(width, height, radius, data)
            FastBlur.verticalBlur(width, height, radius, data)
        }
        return this._imageData
    }

    static horizontalBlur(width, height, radius, data) {
        for (let y = 0; y < height; ++y) {
            let r = 0, g = 0, b = 0
            let num = 0
            let end = radius
            if (width > radius) {
                num += radius
            } else {
                num += width
                end = width
            }
            for (let x = 0; x < end; ++x) {
                let index = (y * width + x) << 2
                r += data[index++]
                g += data[index++]
                b += data[index++]
            }
            let coreStart = radius + 1
            let coreEnd = width - radius
            if (coreEnd >= coreStart) {
                let centerIndex = (y * width) << 2
                let addIndex = centerIndex + (radius << 2)
                for (let xCenter = 0; xCenter < coreStart; ++xCenter) {
                    ++num
                    let index = addIndex
                    r += data[index++]
                    g += data[index++]
                    b += data[index++]
                    index = centerIndex
                    data[index++] = r / num
                    data[index++] = g / num
                    data[index++] = b / num
                    data[index++] = 0xff
                    centerIndex += 4
                    addIndex += 4
                }
                let removeIndex = centerIndex - ((radius + 1) << 2)
                for (let xCenter = coreStart; xCenter < coreEnd; ++xCenter) {
                    let index = removeIndex
                    r -= data[index++]
                    g -= data[index++]
                    b -= data[index++]
                    index = addIndex
                    r += data[index++]
                    g += data[index++]
                    b += data[index++]
                    index = centerIndex
                    data[index++] = r / num
                    data[index++] = g / num
                    data[index++] = b / num
                    data[index++] = 0xff
                    centerIndex += 4
                    addIndex += 4
                    removeIndex += 4
                }
                for (let xCenter = coreEnd; xCenter < width; ++xCenter) {
                    --num
                    let index = removeIndex
                    r -= data[index++]
                    g -= data[index++]
                    b -= data[index++]
                    index = centerIndex
                    data[index++] = r / num
                    data[index++] = g / num
                    data[index++] = b / num
                    data[index++] = 0xff
                    centerIndex += 4
                    removeIndex += 4
                }
            } else {
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
    }

    static verticalBlur(width, height, radius, data) {
        for (let x = 0; x < width; ++x) {
            let r = 0, g = 0, b = 0
            let num = 0
            let end = radius
            if (height > radius) {
                num += radius
            } else {
                num += height
                end = height
            }
            for (let y = 0; y < end; ++y) {
                let index = (y * width + x) << 2
                r += data[index++]
                g += data[index++]
                b += data[index++]
            }
            let coreStart = radius + 1
            let coreEnd = height - radius
            let verticalStep = width << 2
            if (coreEnd >= coreStart) {
                let centerIndex = x << 2
                let addIndex = centerIndex + ((radius * width) << 2)
                for (let yCenter = 0; yCenter < coreStart; ++yCenter) {
                    ++num
                    let index = addIndex
                    r += data[index++]
                    g += data[index++]
                    b += data[index++]
                    index = centerIndex
                    data[index++] = r / num
                    data[index++] = g / num
                    data[index++] = b / num
                    data[index++] = 0xff
                    centerIndex += verticalStep
                    addIndex += verticalStep
                }
                let removeIndex = centerIndex - (((radius + 1) * width) << 2)
                for (let yCenter = coreStart; yCenter < coreEnd; ++yCenter) {
                    let index = removeIndex
                    r -= data[index++]
                    g -= data[index++]
                    b -= data[index++]
                    index = addIndex
                    r += data[index++]
                    g += data[index++]
                    b += data[index++]
                    index = centerIndex
                    data[index++] = r / num
                    data[index++] = g / num
                    data[index++] = b / num
                    data[index++] = 0xff
                    centerIndex += verticalStep
                    addIndex += verticalStep
                    removeIndex += verticalStep
                }
                for (let yCenter = coreEnd; yCenter < height; ++yCenter) {
                    --num
                    let index = removeIndex
                    r -= data[index++]
                    g -= data[index++]
                    b -= data[index++]
                    index = centerIndex
                    data[index++] = r / num
                    data[index++] = g / num
                    data[index++] = b / num
                    data[index++] = 0xff
                    centerIndex += verticalStep
                    removeIndex += verticalStep
                }
            } else {
                for (let yCenter = 0; yCenter < height; ++yCenter) {
                    if (yCenter > 0) {
                        if (yCenter - radius <= 0) {
                            ++num
                        } else {
                            let index = (yCenter * width + x - radius - 1) << 2
                            r -= data[index++]
                            g -= data[index++]
                            b -= data[index++]
                        }
                        if (yCenter + radius < height) {
                            let index = (yCenter * width + x + radius) << 2
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
}
