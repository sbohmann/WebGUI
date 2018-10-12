window.onload = () => new Page().setup()

class Page {
    setup() {
        this._width = 800
        this._height = 800
        this._effect = 'blur'
        this._radius = 25
        
        this._statusParagraph = document.getElementById('statusView')
        this._uploadInput = document.getElementById('imageUpload')
        this._effectInput = document.getElementById('effect')
        this._result = document.getElementById('result')
        this._colorSelectionButton = document.getElementById('colorSelectionButton')
        this._colorPickerDiv = document.getElementById('colorPicker')
        
        this._createCanvas();
        
        this._image = null

        this._statusParagraph.textContent =
            window.File && window.FileReader && window.FileList && window.Blob
                ? 'File APIs supported by browser'
                : 'File APIs not fully supported by browser'

        this._uploadInput.onchange = event => this._fileSelected(event)
        
        this._effectInput.onchange = () => this._setEffectFromInput()
        
        this._colorSelectionButton.onclick = () => this._showColorPicker()
        
        this._setEffectFromInput()
    }

    _createCanvas() {
        this._canvas = document.createElement('canvas') //document.getElementById('canvas')
        this._canvas.width = this._width
        this._canvas.height = this._height
    }

    _fileSelected(event) {
        this._showFirstFile(event.target.files)
    }

    _showFirstFile(files) {
        if (files.length > 0) {
            let file = files[0]
            this._showFile(file)
        }
    }

    _showFile(file) {
        const reader = new FileReader()
        reader.onload = event => this._paintImage(event.target.result)
        reader.readAsArrayBuffer(file)
    }

    _paintImage(data) {
        let orientation = this._readOrientation(data)
        this._createImage(data, orientation)
        this._image.onload = () => {
            new FixOrientation(this._image, orientation).run(image => {
                this._image = image
                this._orientation = orientation
                this._drawImage()
            })
        }
    }

    _readOrientation(data) {
        try {
            return this._exifOrientation(data)
        } catch(error) {
            console.log(error)
            return null
        }
    }

    _exifOrientation(data) {
        let exif = EXIF.readFromBinaryFile(data)
        if (typeof exif === 'object' && typeof exif.Orientation !== 'undefined') {
            return exif.Orientation
        } else {
            return null
        }
    }

    _createImage(data) {
        let url = this._createDataUrl(data)
        this._image = document.createElement('img')
        this._image.src = url
        // TODO revoke object url?
    }

    _createDataUrl(data) {
        let array = new Uint8Array(data)
        let blob = new Blob([array])
        return URL.createObjectURL(blob)
    }

    _drawImage() {
        this._statusParagraph.textContent = "Calculating..."
        setTimeout(() => {
            new FilledPainter(this._canvas, this._image, this._effect, this._radius).run()
            this._result.src = this._canvas.toDataURL("image/png")
            this._statusParagraph.textContent = "Finished. Orientation: " + this._orientation
        }, 0)
    }

    _setEffectFromInput() {
        let value = this._effectInput.value;
        if (value === "max") {
            this._effect = "average"
            this._radius = null
        } else if (value === "none") {
            this._effect = null
            this._radius = null
        } else {
            let radius = parseInt(value);
            if (isNaN(radius)) {
                this._effect = null
                this._radius = null
            } else {
                this._effect = "blur"
                this._radius = radius
            }
        }
        
        if (this._image != null) {
            this._drawImage()
        }
    }
    
    _showColorPicker() {
        if (this._colorPicker === undefined) {
            this._colorPicker = new ColorPicker()
            this._colorPickerDiv.appendChild(this._colorPicker.mainElement)
        }
        this._colorPickerDiv.style.display = 'inline'
    }
}
