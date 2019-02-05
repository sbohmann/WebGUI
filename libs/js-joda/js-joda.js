/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

import {
    ArithmeticException,
    DateTimeException,
    DateTimeParseException,
    IllegalArgumentException,
    IllegalStateException,
    UnsupportedTemporalTypeException,
    NullPointerException
} from './errors.js';

import { Clock } from './Clock.js';
import { DayOfWeek } from './DayOfWeek.js';
import { Duration } from './Duration.js';
import { Instant } from './Instant.js';
import { LocalDate } from './LocalDate.js';
import { LocalTime } from './LocalTime.js';
import { LocalDateTime } from './LocalDateTime.js';
import { Month } from './Month.js';
import { MonthDay } from './MonthDay.js';
import { Period } from './Period.js';
import { Year } from './Year.js';
import { YearConstants } from './YearConstants.js';
import { YearMonth } from './YearMonth.js';
import { ZonedDateTime } from './ZonedDateTime.js';
import { ZoneOffset } from './ZoneOffset.js';
import { ZoneId } from './ZoneId.js';
import { ZoneRegion } from './ZoneRegion.js';

import { ZoneOffsetTransition } from './zone/ZoneOffsetTransition.js';
import { ZoneRules } from './zone/ZoneRules.js';
import { ZoneRulesProvider } from './zone/ZoneRulesProvider.js';

import { ChronoLocalDate } from './chrono/ChronoLocalDate.js';
import { ChronoLocalDateTime } from './chrono/ChronoLocalDateTime.js';
import { ChronoZonedDateTime } from './chrono/ChronoZonedDateTime.js';
import { IsoChronology } from './chrono/IsoChronology.js';

import { ChronoField } from './temporal/ChronoField.js';
import { ChronoUnit } from './temporal/ChronoUnit.js';
import { IsoFields } from './temporal/IsoFields.js';
import { Temporal } from './temporal/Temporal.js';
import { TemporalAccessor } from './temporal/TemporalAccessor.js';
import { TemporalAdjuster } from './temporal/TemporalAdjuster.js';
import { TemporalAdjusters } from './temporal/TemporalAdjusters.js';
import { TemporalAmount } from './temporal/TemporalAmount.js';
import { TemporalField } from './temporal/TemporalField.js';
import { TemporalQueries } from './temporal/TemporalQueries.js';
import { TemporalQuery } from './temporal/TemporalQuery.js';
import { TemporalUnit } from './temporal/TemporalUnit.js';
import { ValueRange } from './temporal/ValueRange.js';

import { DateTimeFormatter } from './format/DateTimeFormatter.js';
import { DateTimeFormatterBuilder } from './format/DateTimeFormatterBuilder.js';
import { DecimalStyle } from './format/DecimalStyle.js';
import { ResolverStyle } from './format/ResolverStyle.js';
import { SignStyle } from './format/SignStyle.js';
import { TextStyle } from './format/TextStyle.js';

// init static properties
import './_init.js';

// private/internal exports, e.g. for use in plugins
import { MathUtil } from './MathUtil.js';
import { StringUtil } from './StringUtil.js';
import { DateTimeBuilder } from './format/DateTimeBuilder.js';
import { DateTimeParseContext } from './format/DateTimeParseContext.js';
import { DateTimePrintContext } from './format/DateTimePrintContext.js';
import { StringBuilder } from './format/StringBuilder.js';
import * as assert from './assert.js';

import { convert } from './convert.js';
import { nativeJs } from './temporal/NativeJsTemporal.js';
import { bindUse } from './use.js';

const _ = {
    assert,
    DateTimeBuilder,
    DateTimeParseContext,
    DateTimePrintContext,
    MathUtil,
    StringUtil,
    StringBuilder,
};

const jsJiodaExports = {
    _,
    convert,
    nativeJs,
    ArithmeticException,
    DateTimeException,
    DateTimeParseException,
    IllegalArgumentException,
    IllegalStateException,
    UnsupportedTemporalTypeException,
    NullPointerException,
    Clock,
    DayOfWeek,
    Duration,
    Instant,
    LocalDate,
    LocalTime,
    LocalDateTime,
    Month,
    MonthDay,
    Period,
    Year,
    YearConstants,
    YearMonth,
    ZonedDateTime,
    ZoneOffset,
    ZoneId,
    ZoneRegion,
    ZoneOffsetTransition,
    ZoneRules,
    ZoneRulesProvider,
    ChronoLocalDate,
    ChronoLocalDateTime,
    ChronoZonedDateTime,
    IsoChronology,
    ChronoField,
    ChronoUnit,
    IsoFields,
    Temporal,
    TemporalAccessor,
    TemporalAdjuster,
    TemporalAdjusters,
    TemporalAmount,
    TemporalField,
    TemporalQueries,
    TemporalQuery,
    TemporalUnit,
    ValueRange,
    DateTimeFormatter,
    DateTimeFormatterBuilder,
    DecimalStyle,
    ResolverStyle,
    SignStyle,
    TextStyle,
};

const use = bindUse(jsJiodaExports);
jsJiodaExports.use = use;

export {
    _,
    use,
    convert,
    nativeJs,
    ArithmeticException,
    DateTimeException,
    DateTimeParseException,
    IllegalArgumentException,
    IllegalStateException,
    UnsupportedTemporalTypeException,
    NullPointerException,
    Clock,
    DayOfWeek,
    Duration,
    Instant,
    LocalDate,
    LocalTime,
    LocalDateTime,
    Month,
    MonthDay,
    Period,
    Year,
    YearConstants,
    YearMonth,
    ZonedDateTime,
    ZoneOffset,
    ZoneId,
    ZoneRegion,
    ZoneOffsetTransition,
    ZoneRules,
    ZoneRulesProvider,
    ChronoLocalDate,
    ChronoLocalDateTime,
    ChronoZonedDateTime,
    IsoChronology,
    ChronoField,
    ChronoUnit,
    IsoFields,
    Temporal,
    TemporalAccessor,
    TemporalAdjuster,
    TemporalAdjusters,
    TemporalAmount,
    TemporalField,
    TemporalQueries,
    TemporalQuery,
    TemporalUnit,
    ValueRange,
    DateTimeFormatter,
    DateTimeFormatterBuilder,
    DecimalStyle,
    ResolverStyle,
    SignStyle,
    TextStyle,
};
