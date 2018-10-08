class ColorPicker {
    constructor() {
        this._result = { r: 0, g: 0, b: 0 }
        this._div = document.createElement('div')
        this._createTable();
    }

    get mainElement() {
        return this._div
    }

    get result() {
        return this._result
    }

    _createTable() {
        this._table = document.createElement('table')
        this._table.style.tableLayout = 'fixed'
        this._table.style.width = '300px'
        this._table.style.height = '150px'
        this._createRows()
        this._div.appendChild(this._table)
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
        for (let index = 0; index < 6; ++index) {
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
        for (let index = 0; index < 6; ++index) {
            let cell = this._hueRow[index]
            let color = this._hueColor(index)
            cell.style.backgroundColor = this._cssColorRepresentation(color)
        }
    }
    
    _setHue(index) {
        this._hueIndex = index
        this._initializeSaturationCells()
    }

    _initializeSaturationCells() {
        let hueColor = this._hueColor(this._hueIndex)
        for (let index = 0; index < 6; ++index) {
            let cell = this._saturationRow[index]
            let color = this._saturationColor(index)
            cell.style.backgroundColor = this._cssColorRepresentation(color)
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
        for (let index = 0; index < 6; ++index) {
            let cell = this._luminosityRow[index]
            let color = this._luminosityColor(index)
            cell.style.backgroundColor = this._cssColorRepresentation(color)
        }
    }

    _hueColor(index) {
        switch (index) {
            case 0: return { r: 0xff, g: 0, b: 0 }
            case 1: return { r: 0xff, g: 0xff, b: 0 }
            case 2: return { r: 0, g: 0xff, b: 0 }
            case 3: return { r: 0, g: 0xff, b: 0xff }
            case 4: return { r: 0, g: 0, b: 0xff }
            case 5: return { r: 0xff, g: 0, b: 0xff }
        }
    }

    _saturationColor(index) {
        return this._desaturate(this._hueColor(this._hueIndex), index / 5);
    }

    _luminosityColor(index) {
        return this._multiply(this._saturationColor(this._saturationIndex), index / 5);
        
    }
    
    _cssColorRepresentation(color) {
        return '#' + this._hex(color.r) + this._hex(color.g) + this._hex(color.b)
    }
    
    _hex(value) {
        return ((value >> 4) & 0xf).toString(16) + (value & 0xf).toString(16)
    }
    
    _multiply(color, factor) {
        return {
            r: color.r * factor,
            g: color.g * factor,
            b: color.b * factor
        }
    }

    _desaturate(color, factor) {
        return {
            r: this._interpolate(color.r, 0xff, factor),
            g: this._interpolate(color.g, 0xff, factor),
            b: this._interpolate(color.b, 0xff, factor)
        }
    }

    _interpolate(lhs, rhs, lhsPart) {
        let rhsPart = (1 - lhsPart);
        return lhs * lhsPart + rhs * rhsPart
    }
}
