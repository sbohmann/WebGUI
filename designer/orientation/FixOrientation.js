class FixOrientation {
    constructor(image, orientation) {
        this._image = image
        this._orientation = orientation
    }

    run(callback) {
        if (this._orientation === null || this._orientation === 1) {
            callback(this._image)
        } else {
            callback(this._image)
            // this.transformImage(callback)
        }
    }

    transformImage(callback) {
        let width = this._image.width
        let height = this._image.height
        let canvas = this.createCanvas(height, width)
        let context = canvas.getContext('2d')
        this.setContextTransformation(context, width, height)
        context.drawImage(this._image, 0, 0)
        let result = this.createResult(canvas)
        result.onload = () => callback(result)
    }

    createCanvas(height, width) {
        let canvas = document.createElement('canvas')
        this.setCanvasSize(canvas, height, width)
        return canvas
    }

    setCanvasSize(canvas, height, width) {
        if (4 < this._orientation && this._orientation < 9) {
            canvas.width = height
            canvas.height = width
        } else {
            canvas.width = width
            canvas.height = height
        }
    }

    setContextTransformation(context, width, height) {
        switch (this._orientation) {
            case 2:
                context.transform(-1, 0, 0, 1, width, 0)
                break
            case 3:
                context.transform(-1, 0, 0, -1, width, height)
                break
            case 4:
                context.transform(1, 0, 0, -1, 0, height)
                break
            case 5:
                context.transform(0, 1, 1, 0, 0, 0)
                break
            case 6:
                context.transform(0, 1, -1, 0, height, 0)
                break
            case 7:
                context.transform(0, -1, -1, 0, height, width)
                break
            case 8:
                context.transform(0, -1, 1, 0, 0, width)
                break
        }
    }

    createResult(canvas) {
        let result = document.createElement('img')
        result.src = canvas.toDataURL()
        return result
    }
}
