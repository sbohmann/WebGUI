class FilledPainter {
    constructor(canvas, image) {
        this._canvas = canvas
        this._context = canvas.getContext('2d')
        this._image = image;

        this._imageRatio = image.width / image.height
        this._canvasRatio = canvas.width / canvas.height
    }
    
    run() {
        this._calculateSizes();

        this._drawScaledImage();
        
        this._blur();

        this._drawFittedImage();
    }

    _calculateSizes() {
        this._calculateScaledSize()
        this._calculateFittedSize()
    }

    _calculateScaledSize() {
        if (this._imageRatio > this._canvasRatio) {
            this._scaledWidth = image.width * this._canvas.height / image.height
            this._scaledHeight = this._canvas.width
        } else {
            this._scaledWidth = this._canvas.width
            this._scaledHeight = image.height * this._canvas.width / image.width
        }
    }

    _calculateFittedSize() {
        if (this._imageRatio > this._canvasRatio) {
            this._fittedWidth = this._canvas.width
            this._fittedHeight = image.height * this._canvas.width / image.width
        } else {
            this._fittedWidth = image.width * this._canvas.height / image.height
            this._fittedHeight = this._canvas.width
        }
    }

    _drawScaledImage() {
        this._context.drawImage(
            this._image,
            0, 0,
            this._scaledWidth, this._scaledHeight)
    }
    
    _blur() {
        new Blur(this._imageData()).run()
    }

    _imageData() {
        return this._context.getImageData(0, 0, this._canvas.width, this._canvas.height)
    }

    _drawFittedImage() {
        this._context.drawImage(
            this._image,
            0, 0,
            this._fittedWidth, this._fittedHeight)
    }
}
