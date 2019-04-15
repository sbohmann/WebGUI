import { DatePicker } from './date_picker/date_picker.js'

import {iso8601FirstWeekdayOfMonth} from './date_picker/first_weekday_of_month.js'
import {CalendarMonth} from './date_picker/calendar_month.js'
import * as JSJoda from '../libs/js-joda/js-joda.js'

window.onload = () => new DatePicker(document.getElementById("date-picker"))

for (let year = 1; year <= 9999; ++year) {
    for (let month = 1; month <= 12; ++month) {
        let date = JSJoda.LocalDate.of(year, month, 1)
        let calculated = iso8601FirstWeekdayOfMonth(new CalendarMonth(year, month))
        if (calculated !== date.dayOfWeek().value()) {
            throw new Error('Calculated wrong week day value ' + calculated +
                ' for date ' + date + ' with week day ' + date.dayOfWeek() +
                ' with value ' + date.dayOfWeek().value())
        }
    }
}
