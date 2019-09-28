import {isLeapYear} from './is_leap_year.js'

const longMonths = new Set([1, 3, 5, 7, 8, 10, 12])
const shortMonths = new Set([4, 6, 9, 11])

export function daysForMonth(calendarMonth) {
    if (longMonths.has(calendarMonth.month)) {
        return 31
    } else if (shortMonths.has(calendarMonth.month)) {
        return 30
    } else if (isLeapYear(calendarMonth.year)) {
        return 29
    } else {
        return 28
    }
}
