class ColorPicker {
    constructor() {
        this._steps = 12
        this._result = { r: 0, g: 0, b: 0 }
        this._mainDiv = document.createElement('div')
        this._createTable()
        this._createBottomRow()
    }

    get mainElement() {
        return this._mainDiv
    }

    get result() {
        return this._result
    }
    
    set onclose(closingFunction) {
        this._closingFunction = closingFunction
    }
    
    set oncolorpick(colorPickHandler) {
        this._colorPickHandler = colorPickHandler
    }

    _createTable() {
        this._table = document.createElement('table')
        this._table.style.tableLayout = 'fixed'
        this._table.style.width = '300px'
        this._table.style.height = '150px'
        this._createRows()
        this._mainDiv.appendChild(this._table)
        this._initializeCellColors()
    }

    _createRows() {
        this._hueRow = this._createRow()
        this._saturationRow = this._createRow()
        this._luminosityRow = this._createRow()
    }

    _createRow() {
        let cells = []
        let tableRow = document.createElement('tr')
        for (let index = 0; index < this._steps; ++index) {
            let cell = document.createElement('td')
            cell.classList.add('colorPickerCell')
            cells.push(cell)
            tableRow.appendChild(cell)
        }
        this._table.appendChild(tableRow)
        return cells
    }

    _initializeCellColors() {
        this._initializeHueCells()
        this._setHue(0)
        this._setSaturation(0)
    }

    _initializeHueCells() {
        for (let index = 0; index < this._steps; ++index) {
            let cell = this._hueRow[index]
            let color = this._hueColor(index)
            cell.style.backgroundColor = this._cssColorRepresentation(color)
            cell.onclick = () => {
                this._setHue(index)
                this._setSaturation(2)
            }
        }
    }
    
    _setHue(index) {
        this._hueIndex = index
        this._initializeSaturationCells()
    }

    _initializeSaturationCells() {
        let hueColor = this._hueColor(this._hueIndex)
        for (let index = 0; index < this._steps; ++index) {
            let cell = this._saturationRow[index]
            let color = this._saturationColor(index)
            cell.style.backgroundColor = this._cssColorRepresentation(color)
            cell.onclick = () => {
                this._setSaturation(index)
            }
        }
    }

    _setSaturation(index) {
        this._saturationIndex = index
        this._initializeLuminosityCells()
    }
    
    _setLuminosity(index) {
    }

    _initializeLuminosityCells() {
        let saturationColor = this._saturationColor(this._saturationIndex)
        for (let index = 0; index < this._steps; ++index) {
            let cell = this._luminosityRow[index]
            let color = this._luminosityColor(index)
            let cssColor = this._cssColorRepresentation(color);
            cell.style.backgroundColor = cssColor
            cell.onclick = () => {
                if (this._colorPickHandler) {
                    this._colorPickHandler(color, cssColor)
                }
            }
        }
    }

    _hueColor(index) {
        switch (index) {
            case 0: return { r: 0xff, g: 0, b: 0 }
            case 1: return { r: 0xff, g: 0xcc, b: 0 }
            case 2: return { r: 0xff, g: 0xff, b: 0 }
            case 3: return { r: 0xcc, g: 0xff, b: 0 }
            case 4: return { r: 0, g: 0xff, b: 0 }
            case 5: return { r: 0, g: 0xff, b: 0xcc }
            case 6: return { r: 0, g: 0xff, b: 0xff }
            case 7: return { r: 0, g: 0xcc, b: 0xff }
            case 8: return { r: 0, g: 0, b: 0xff }
            case 9: return { r: 0xcc, g: 0, b: 0xff }
            case 10: return { r: 0xff, g: 0, b: 0xff }
            case 11: return { r: 0xff, g: 0, b: 0xcc }
        }
    }

    _saturationColor(index) {
        return this._desaturate(this._hueColor(this._hueIndex), index / (this._steps - 1));
    }

    _luminosityColor(index) {
        return this._multiply(this._saturationColor(this._saturationIndex), index / (this._steps - 1));
        
    }
    
    _cssColorRepresentation(color) {
        return '#' + this._hex(color.r) + this._hex(color.g) + this._hex(color.b)
    }
    
    _hex(value) {
        return ((value >> 4) & 0xf).toString(16) + (value & 0xf).toString(16)
    }
    
    _multiply(color, factor) {
        return this._createColor(
            color.r * factor,
            color.g * factor,
            color.b * factor)
    }

    _desaturate(color, factor) {
        return this._createColor(
            this._interpolate(color.r, 0xff, factor),
            this._interpolate(color.g, 0xff, factor),
            this._interpolate(color.b, 0xff, factor))
    }

    _interpolate(lhs, rhs, lhsPart) {
        let rhsPart = (1 - lhsPart);
        return lhs * lhsPart + rhs * rhsPart
    }

    _createColor(r, g, b) {
        return {
            r: Math.round(r),
            g: Math.round(g),
            b: Math.round(b)
        };
    }
    
    _createBottomRow() {
        let cancelButton = document.createElement('button')
        cancelButton.textContent = 'Close'
        cancelButton.onclick = () => {
            if (this._closingFunction) {
                this._closingFunction()
            }
        }
        this._mainDiv.appendChild(cancelButton)
    }
}
