import {a, div, span, text} from '../elements.js'

export class MonthSelector {
    constructor(calendarMonth) {
        this.calendarMonth = calendarMonth
        this.monthChangedHandlers = []
        this._createElements()
        this._createMainElement()
        this._setupEventHandling()
    }

    addMonthChangedHandler(handler) {
        this.monthChangedHandlers.push(handler)
    }

    _createElements() {
        this.back = a(text('<'))
        this.month = this._createMonthDisplay()
        this.forward = a(text('>'))
    }

    _createMonthDisplay() {
        this._monthDisplayText = text(this.calendarMonth)
        return span(this._monthDisplayText)
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
        this._monthChanged()
    }

    _forward() {
        this.calendarMonth = this.calendarMonth.plusMonths(1)
        this._monthChanged()
    }

    _monthChanged() {
        this._monthDisplayText.nodeValue = this.calendarMonth
        for (let handler of this.monthChangedHandlers) {
            handler(this.calendarMonth)
        }
    }
}
