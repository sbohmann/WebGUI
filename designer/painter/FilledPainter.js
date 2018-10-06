class FilledPainter {
    constructor(canvas, image) {
        this._canvas = canvas
        this._context = canvas.getContext('2d')
        this._image = image

        this._imageRatio = image.width / image.height
        this._canvasRatio = canvas.width / canvas.height
    }
    
    run() {
        this._calculateSizes()

        this._drawScaledImage()
        
        this._blur()

        this._drawFittedImage()
    }

    _calculateSizes() {
        this._calculateScaledSize()
        this._calculateFittedSize()
    }

    _calculateScaledSize() {
        if (this._imageRatio > this._canvasRatio) {
            this._scaledWidth = this._image.width * this._canvas.height / this._image.height
            this._scaledHeight = this._canvas.width
        } else {
            this._scaledWidth = this._canvas.width
            this._scaledHeight = this._image.height * this._canvas.width / this._image.width
        }
    }

    _calculateFittedSize() {
        if (this._imageRatio > this._canvasRatio) {
            this._fittedWidth = this._canvas.width
            this._fittedHeight = this._image.height * this._canvas.width / this._image.width
        } else {
            this._fittedWidth = this._image.width * this._canvas.height / this._image.height
            this._fittedHeight = this._canvas.width
        }
    }

    _drawScaledImage() {
        this.drawImage(this._scaledWidth, this._scaledHeight)
    }

    _blur() {
        let resultImageData = new FastBlur(this._imageData(), 25).run()
        this._context.putImageData(resultImageData, 0, 0)
    }

    _imageData() {
        return this._context.getImageData(0, 0, this._canvas.width, this._canvas.height)
    }

    _drawFittedImage() {
        this.drawImage(this._fittedWidth, this._fittedHeight)
    }

    drawImage(width, height) {
        let xOffset = (this._canvas.width - width) / 2
        let yOffset = (this._canvas.height - height) / 2
        this._context.drawImage(
            this._image,
            xOffset, yOffset,
            width, height)
    }
}
