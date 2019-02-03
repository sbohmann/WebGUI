import {a, div, img, span, text} from '../elements.js'

export class MonthSelector {
    constructor(calendarMonth) {
        this.calendarMonth = calendarMonth
        this._createElements()
        this._createMainElement()
        this._setupEventHandling()
    }

    _createElements() {
        this.back = a(img('images/back.png'))
        this.month = this._createMonthDisplay()
        this.forward = a(img('images/forward.png'))
    }

    _createMonthDisplay() {
        this._monthDisplayText = text(this.calendarMonth)
        let result = span(this._monthDisplayText)
        result.style.fontSize = '60px'
        result.style.verticalAlign = 'top'
        return result
    }

    _createMainElement() {
        this.mainElement = div(this.back, this.month, this.forward)
    }

    _setupEventHandling() {
        this.back.onclick = () => this._back()
        this.forward.onclick = () => this._forward()
    }

    _back() {
        this.calendarMonth = this.calendarMonth.plusMonths(-1)
        this._monthDisplayText.nodeValue = this.calendarMonth
    }

    _forward() {
        this.calendarMonth = this.calendarMonth.plusMonths(1)
        this._monthDisplayText.nodeValue = this.calendarMonth
    }
}
