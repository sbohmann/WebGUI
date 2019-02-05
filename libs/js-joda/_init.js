/*
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

import {_init as ZoneOffsetInit} from './ZoneOffset.js';
import {_init as DayOfWeekInit} from './DayOfWeek.js';
import {_init as DurationInit} from './Duration.js';
import {_init as InstantInit} from './Instant.js';
import {_init as LocalDateInit} from './LocalDate.js';
import {_init as LocalTimeInit} from './LocalTime.js';
import {_init as LocalDateTimeInit} from './LocalDateTime.js';
import {_init as MonthInit} from './Month.js';
import {_init as MonthDayInit} from './MonthDay.js';
import {_init as PeriodInit} from './Period.js';
import {_init as YearInit} from './Year.js';
import {_init as YearConstantsInit} from './YearConstants.js';
import {_init as YearMonthInit} from './YearMonth.js';
import {_init as ZonedDateTimeInit} from './ZonedDateTime.js';
import {_init as IsoChronologyInit} from './chrono/IsoChronology.js';
import {_init as DateTimeFormatterInit} from './format/DateTimeFormatter.js';
import {_init as ChronoFieldInit} from './temporal/ChronoField.js';
import {_init as ChronoUnitInit} from './temporal/ChronoUnit.js';
import {_init as IsoFieldsInit} from './temporal/IsoFields.js';
import {_init as DateTimeFormatterBuilderInit} from './format/DateTimeFormatterBuilder.js';

import {_init as TemporalQueriesInit} from './temporal/TemporalQueriesFactory.js';
import {_init as ZoneIdInit} from './ZoneIdFactory.js';

let isInit = false;

function init() {

    if (isInit) {
        return;
    }

    isInit = true;

    YearConstantsInit();
    DurationInit();
    ChronoUnitInit();
    ChronoFieldInit();
    LocalTimeInit();
    IsoFieldsInit();
    TemporalQueriesInit();
    DayOfWeekInit();
    InstantInit();
    LocalDateInit();
    LocalDateTimeInit();
    YearInit();
    MonthInit();
    YearMonthInit();
    MonthDayInit();
    PeriodInit();
    ZoneOffsetInit();
    ZonedDateTimeInit();
    ZoneIdInit();
    IsoChronologyInit();
    DateTimeFormatterInit();
    DateTimeFormatterBuilderInit();
}

init();
