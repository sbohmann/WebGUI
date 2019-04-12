import {div} from '../elements.js'
import {MonthSelector} from './month_selector.js'
import {CalendarMonth} from './calendar_month.js'
import {MonthView} from './month_view.js'

export class DatePicker {
    constructor(mainElement) {
        this._calendarMonth = new CalendarMonth(2019, 2)
        this.mainElement = mainElement
            ? mainElement
            : div()
        this._createUi()
    }

    _createUi() {
        this._createMonthSelector()
        this._createMonthView()
        this._setStyles()
    }

    _createMonthSelector() {
        this._monthSelector = new MonthSelector(this._calendarMonth)
        this.mainElement.appendChild(this._monthSelector.mainElement)
        this._monthSelector.addMonthChangedHandler(newCalendarMonth => this._monthChanged(newCalendarMonth))
    }

    _monthChanged(newCalendarMonth) {
        this._calendarMonth = newCalendarMonth
        this._monthView.calendarMonth = this._calendarMonth
    }

    _createMonthView() {
        this._monthView = new MonthView(this._calendarMonth)
        this.mainElement.appendChild(this._monthView.mainElement)
    }

    _setStyles() {
        this._styleMainElement()
        this._monthView.mainElement.style.marginTop = '5px'
    }

    _styleMainElement() {
        let style = this.mainElement.style
        style.display = 'table'
        style.background = '#ddeeff'
        style.padding = '5px'
        style.cursor = 'pointer'
        style.userSelect = 'none'
        style.msUserSelect = 'none'
        style.webkitUserSelect = 'none'
    }
}
