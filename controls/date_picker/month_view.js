import {table, tr, td, text} from '../elements.js'
import * as JSJoda from '../../libs/js-joda/js-joda.js'

const NumberOfRows = 6
const DaysPerWeek = 7

export class MonthView {
    constructor(calendarMonth) {
        this._calendarMonth = calendarMonth
        this._firstDayOfWeek = 1 // monday
        this._createUi()
        this._updateUi()
    }

    set firstDayOfWeek(value) {
        checkDayOfWeek(value)
        this._firstDayOfWeek = value
        this._updateUi()
    }

    _createUi() {
        this.mainElement = table()
        this._rows = Array(NumberOfRows)
        this._cells = Array(NumberOfRows * DaysPerWeek)
        for (let index = 0; index < NumberOfRows; ++index) {
            this._createRow(index)
        }
    }

    _createRow(row_index) {
        let row = tr()
        this._rows[row_index] = row
        this.mainElement.appendChild(row)
        for (let index = 0; index < DaysPerWeek; ++index) {
            let cell_index = row_index * DaysPerWeek + index
            let cell = td(text(cell_index))
            this._cells[cell_index] = cell
            cell.style.fontSize = '32px'
            row.appendChild(cell)
        }
    }

    _updateUi() {
        this._determineFirstDayCellIndex()
    }

    _determineFirstDayCellIndex() {
        let firstDayOfMonth = JSJoda.LocalDate.of(this._calendarMonth.year, this._calendarMonth.month, 1)
        console.log(firstDayOfMonth)
        console.log(firstDayOfMonth.dayOfWeek())
        console.log(firstDayOfMonth.dayOfWeek().value())
    }
}

function checkDayOfWeek(value) {
    if (!Number.isInteger(value)) {
        throw new TypeError(value)
    } else if (value < 1 || value > 7) {
        throw new ValueError(value)
    }
}
