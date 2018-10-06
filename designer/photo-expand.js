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
            this.showFile(files[0])
        }
    }

    showFile(file) {
        const reader = new FileReader()
        reader.onload = event => this.paintImage(event.target.result)
        reader.readAsArrayBuffer(file)
    }

    paintImage(data) {
        let image = this.createImage(data)
        image.onload = () => {
            this.drawImage(image)
        }
    }

    createImage(data) {
        let url = this.createDataUrl(data)
        let image = new Image()
        image.src = url
        return image
    }

    createDataUrl(data) {
        let array = new Uint8Array(data)
        let blob = new Blob([array])
        return URL.createObjectURL(blob)
    }

    drawImage(image) {
        this._statusParagraph.textContent = "Calculating..."
        setTimeout(() => {
            new FilledPainter(this._canvas, image).run()
            this._result.src = this._canvas.toDataURL("image/png")
            this._statusParagraph.textContent = "Finished."
        }, 0)
    }
}
