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
    }

    _createMonthSelector() {
        let monthSelector = new MonthSelector(this._calendarMonth)
        this.mainElement.appendChild(monthSelector.mainElement)
        monthSelector.addMonthChangedHandler(newCalendarMonth => this._monthChanged(newCalendarMonth))
    }

    _monthChanged(newCalendarMonth) {
        this._calendarMonth = newCalendarMonth
        this._monthView.calendarMonth = this._calendarMonth
    }

    _createMonthView() {
        this._monthView = new MonthView(this._calendarMonth)
        this.mainElement.appendChild(this._monthView.mainElement)
    }
}
