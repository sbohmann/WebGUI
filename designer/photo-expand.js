const Width = 800
const Height = 800

window.onload = () => new Page().setup()

class Page {
    setup() {
        this._statusParagraph = document.getElementById('statusView')
        this._uploadInput = document.getElementById('imageUpload')
        this._result = document.getElementById('result')
        this.createCanvas();

        this._statusParagraph.textContent =
            window.File && window.FileReader && window.FileList && window.Blob
                ? 'File APIs supported by browser'
                : 'File APIs not fully supported by browser'

        this._uploadInput.addEventListener(
            'change',
            event => this.fileSelected(event),
            false)
    }

    createCanvas() {
        this._canvas = document.createElement('canvas') //document.getElementById('canvas')
        this._canvas.width = Width
        this._canvas.height = Height
    }

    fileSelected(event) {
        this.showFirstFile(event.target.files)
    }

    showFirstFile(files) {
        if (files.length > 0) {
            let file = files[0]
            this.showFile(file)
        }
    }

    showFile(file) {
        const reader = new FileReader()
        reader.onload = event => this.paintImage(event.target.result)
        reader.readAsArrayBuffer(file)
    }

    paintImage(data) {
        let orientation = this.readOrientation(data)
        this.createImage(data, orientation)
        this._image.onload = () => {
            new FixOrientation(this._image, orientation).run(image => {
                this._image = image
                this._orientation = orientation
                this.drawImage()
            })
        }
    }

    readOrientation(data) {
        try {
            return this.exifOrientation(data)
        } catch(error) {
            console.log(error)
            return null
        }
    }

    exifOrientation(data) {
        let exif = EXIF.readFromBinaryFile(data)
        if (typeof exif === 'object' && typeof exif.Orientation !== 'undefined') {
            return exif.Orientation
        } else {
            return null
        }
    }

    createImage(data) {
        let url = this.createDataUrl(data)
        this._image = document.createElement('img')
        this._image.src = url
    }

    createDataUrl(data) {
        let array = new Uint8Array(data)
        let blob = new Blob([array])
        return URL.createObjectURL(blob)
    }

    drawImage() {
        this._statusParagraph.textContent = "Calculating..."
        setTimeout(() => {
            new FilledPainter(this._canvas, this._image).run()
            this._result.src = this._canvas.toDataURL("image/png")
            this._statusParagraph.textContent = "Finished. Orientation: " + this._orientation
        }, 0)
    }
}
