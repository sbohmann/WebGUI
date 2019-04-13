import {table, tr, td, text} from './elements.js'
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

    set calendarMonth(value) {
        this._calendarMonth = value
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
        this._styleMainElement()
    }

    _createRow(row_index) {
        let row = tr()
        this._rows[row_index] = row
        this.mainElement.appendChild(row)
        for (let index = 0; index < DaysPerWeek; ++index) {
            this._createCell(row_index, index, row)
        }
    }

    _createCell(row_index, index, row) {
        let cell_index = row_index * DaysPerWeek + index
        let cell = td()
        cell.style.textAlign = 'center'
        this._cells[cell_index] = cell
        row.appendChild(cell)
    }

    _styleMainElement() {
        let style = this.mainElement.style
        style.tableLayout = 'fixed'
        style.emptyCells = 'show'
    }

    _updateUi() {
        this._determineFirstDayOfMonth()
        this._clearCells()
        this._fillCells()
    }

    _determineFirstDayOfMonth() {
        this._firstDayOfMonth = JSJoda.LocalDate.of(this._calendarMonth.year, this._calendarMonth.month, 1)
        this._firstDayCellIndex = (this._firstDayOfMonth.dayOfWeek().value() + 6 - this._firstDayOfWeek) % 7
    }

    _clearCells() {
        for (let cell of this._cells) {
            while (cell.firstChild) {
                cell.removeChild(cell.firstChild)
            }
        }
    }

    _fillCells() {
        let day = this._firstDayOfMonth
        for (let cellIndex = 0; cellIndex < this._firstDayCellIndex; ++cellIndex) {
            this._addNonBreakingSpaceToEmptyCell(cellIndex)
        }
        let cellIndex = this._firstDayCellIndex
        while (day.month().value() === this._calendarMonth.month) {
            this._addTextToCell(cellIndex, day)
            day = day.plusDays(1)
            cellIndex += 1
        }
        for (; cellIndex < this._cells.length; ++cellIndex) {
            this._addNonBreakingSpaceToEmptyCell(cellIndex)
        }
    }

    _addNonBreakingSpaceToEmptyCell(cellIndex) {
        this._cells[cellIndex].appendChild(text('\xa0'))
    }

    _addTextToCell(cellIndex, day) {
        this._cells[cellIndex].appendChild(text(day.dayOfMonth()))
    }
}

function checkDayOfWeek(value) {
    if (!Number.isInteger(value)) {
        throw new TypeError(value)
    } else if (value < 1 || value > 7) {
        throw new ValueError(value)
    }
}
