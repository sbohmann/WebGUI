class SolidColor {
    constructor(imageData, color) {
        this._imageData = imageData
        this._color = color;
    }

    run() {
        const data = this._imageData.data
        const color = this._color
        const width = this._imageData.width
        const height = this._imageData.height
        this.paintPixels(width, height, color, data)
        return this._imageData
    }

    paintPixels(width, height, color, data) {
        let r = color.r
        let g = color.g
        let b = color.b
        
        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                let index = (y * width + x) << 2
                data[index++] = r
                data[index++] = g
                data[index++] = b
                data[index++] = 0xff
            }
        }
    }
}
