function element(type, content) {
    let result = document.createElement(type)
    for (let element of content) {
        console.log(element)
        result.appendChild(element)
    }
    return result
}

function div(...content) {
    return element('div', content)
}

function span(...content) {
    return element('span', content)
}

function a(...content) {
    return element('a', content)
}

function img(src, ...content) {
    let result = element('img', content)
    result.src = src
    return result
}

function text(content) {
    return document.createTextNode(content)
}

function integer(value) {
    return Number.isInteger(value)
}

class DatePicker {
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

class MonthSelector {
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

class CalendarMonth {
    constructor(year, month, _precalculatedValue) {
        if (_precalculatedValue) {
            this._value = _precalculatedValue
        } else {
            this._checkArguments(year, month)
            this._value = (year - 1) * 12 + (month - 1)
        }
    }

    _checkArguments(year, month) {
        if (!integer(year) || !integer(month)) {
            throw TypeError('year: ' + year + ', month: ' + month)
        } else if (year < 1 || month < 1 || month > 12) {
            throw RangeError('month: ' + month)
        }
    }

    get year() {
        return 1 + Math.floor(this._value / 12)
    }

    get month() {
        return 1 + this._value % 12
    }

    plusYears(delta) {
        return new CalendarMonth(null, null, this._value + 12 * delta)
    }

    plusMonths(delta) {
        return new CalendarMonth(null, null, this._value + delta)
    }

    toString() {
        let month = this.month
        return this.year + (month < 10 ? '-0' : '-') + this.month
    }
}
