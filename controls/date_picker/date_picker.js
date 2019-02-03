import { div } from '../elements.js'
import {MonthSelector} from './month_selector.js'
import {CalendarMonth} from './calendar_month.js'

export class DatePicker {
    constructor(mainElement) {
        this.mainElement = mainElement
            ? mainElement
            : div()
        this._createUi()
    }

    _createUi() {
        this._createMonthSelector()
    }

    _createMonthSelector() {
        let monthSelector = new MonthSelector(new CalendarMonth(2019, 2))
        this.mainElement.appendChild(monthSelector.mainElement)
    }
}
