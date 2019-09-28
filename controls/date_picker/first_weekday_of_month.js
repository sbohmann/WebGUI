import {daysForMonth} from './days_for_month.js'
import {CalendarMonth} from './calendar_month.js'

//  monday: 1 ... sunday: 7

const daysPer400YearInterval = (365 * 400 + 97)
const iso8601FirstWeekday = 1

export const firstWeekdayOfMonth =
    calendarMonth => new FirstWeekdayOfMonth(calendarMonth).result

class FirstWeekdayOfMonth {
    constructor(calendarMonth) {
        this.year = calendarMonth.year
        this.month = calendarMonth.month
        this.yearsBeforeInterval = Math.trunc(this.year / 400)
        this.yearWithinInterval = (this.year - 1) % 400 + 1
        this.determineResult()
    }

    determineResult() {
        let daysBefore = this.daysBeforeInterval()
        daysBefore += this.daysWithinInterval()
        this.result = iso8601FirstWeekday  + daysBefore % 7
    }

    daysBeforeInterval() {
        return this.yearsBeforeInterval * daysPer400YearInterval
    }

    daysWithinInterval() {
        let completedYearsInInterval = (this.yearWithinInterval - 1)
        let leapDays = Math.trunc(completedYearsInInterval / 4) - Math.trunc(completedYearsInInterval / 100)
        return this.nonLeapDaysInCompletedYearsInInterval() + leapDays + this.daysInYearBeforeMonth()
    }

    nonLeapDaysInCompletedYearsInInterval() {
        return (this.yearWithinInterval - 1) * 365
    }

    daysInYearBeforeMonth() {
        let result = 0
        for (let other = 1; other < this.month; ++other) {
            result += daysForMonth(new CalendarMonth(this.yearWithinInterval, other))
        }
        return result
    }
}
