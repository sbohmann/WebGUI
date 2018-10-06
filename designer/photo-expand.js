window.onload = () => new Page().setup()

class Page {
    setup() {
        this._statusParagraph = document.getElementById('statusView')
        this._uploadInput = document.getElementById('imageUpload')
        this._canvas = document.getElementById('canvas')

        this._statusParagraph.textContent =
            window.File && window.FileReader && window.FileList && window.Blob
                ? 'File APIs supported by browser'
                : 'File APIs not fully supported by browser'

        this._uploadInput.addEventListener(
            'change',
            event => this.fileSelected(event),
            false)
    }

    fileSelected(event) {
        this.showFirstFile(event.target.files)
    }

    showFirstFile(files) {
        if (files.length > 0) {
            this.showFile(files[0]);
        }
    }

    showFile(file) {
        const reader = new FileReader()
        reader.onload = event => this.paintImage(event.target.result)
        reader.readAsArrayBuffer(file)
    }

    paintImage(data) {
        let image = this.createImage(data);
        image.onload = () => {
            this.drawImage(image);
        }
    }

    createImage(data) {
        let url = this.createDataUrl(data);
        let image = new Image()
        image.src = url
        return image;
    }

    createDataUrl(data) {
        let array = new Uint8Array(data)
        let blob = new Blob([array])
        return URL.createObjectURL(blob);
    }

    drawImage(image) {
        new FilledPainter(this.getContext()).run();
    }

    getContext() {
        return this._canvas
            .getContext('2d');
    }
}
