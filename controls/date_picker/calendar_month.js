export class CalendarMonth {
    constructor(year, month, _precalculatedValue) {
        if (_precalculatedValue) {
            this._value = _precalculatedValue
        } else {
            this._checkArguments(year, month)
            this._value = (year - 1) * 12 + (month - 1)
        }
    }

    _checkArguments(year, month) {
        if (!Number.isInteger(year) || !Number.isInteger(month)) {
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
