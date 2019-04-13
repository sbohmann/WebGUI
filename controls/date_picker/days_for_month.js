
// TODO extend by adding iso8601 and gregorian functions for first week day of month, then remove js joda dependency

const longMonths = new Set([1, 3, 5, 7, 8, 10, 12])
const shortMonths = new Set([1, 3, 5, 7, 8, 10, 12])

function build(isLeapYear) {
    return calendarMonth => {
        if (longMonths.contains(calendarMonth.month)) {
            return 31
        } else if (shortMonths.contains(calendarMonth.month())) {
            return 30
        } else if (isLeapYear(calendarMonth.year)) {
            return 29
        } else {
            return 28
        }
    }
}

function isProlepticGregorianLeapYear(year) {
    if (year % 400 === 0) {
        return true
    } else if (year % 4 !== 0) {
        return false
    } else {
        return year % 100 === 0
    }
}

function isJulianLeapYear(year) {
    return year % 4 === 0
}

export const iso8601DaysForMonth = build(isProlepticGregorianLeapYear)

export const gregorianDaysForMonth = build(year => {
    if (year >= 1600) {
        return isProlepticGregorianLeapYear(year)
    } else {
        return isJulianLeapYear(yesr)
    }
})
