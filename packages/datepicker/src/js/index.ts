import { DateParts } from '../react'
import { MonthDateParts } from '../react/calendar'

const num = (n: string) => parseInt(n, 10)

export const arrayOf = (num: string): unknown[] =>
  Array.apply(null, Array(parseInt(num, 10) || 0))

export const getDaysInMonth = ({ mm, yyyy }: MonthDateParts): string => {
  const lastDayInPreviousMonth = 0
  return new Date(parseInt(yyyy, 10), parseInt(mm, 10), lastDayInPreviousMonth)
    .getDate()
    .toString()
}

export const forceValidDay = (date?: DateParts): string => {
  if (!date) return ''

  const maxDays = parseInt(getDaysInMonth(date), 10)
  const day = parseInt(date.dd, 10)
  if (isNaN(day)) return ''
  else if (day > maxDays) return maxDays.toString()
  else if (day < 1) return '1'
  else return day.toString()
}

export const forceValidMonth = (date?: Pick<DateParts, 'mm'>): string => {
  if (!date) return ''

  const month = num(date.mm)
  if (isNaN(month)) return ''
  else if (month > 12) return '12'
  else if (month < 1) return '1'
  else return month.toString()
}

export const forceValidYear = (date?: Pick<DateParts, 'yyyy'>): string => {
  if (!date) return ''

  const year = num(date.yyyy)
  return isNaN(year) ? '' : new Date(year, 1, 1).getFullYear().toString()
}

export const getFirstDayOfWeekForMonth = ({
  mm,
  yyyy
}: MonthDateParts): string =>
  new Date(num(yyyy), num(mm) - 1, 1).getDay().toString()

export const getPrevMonthYear = ({
  mm,
  yyyy
}: MonthDateParts): MonthDateParts => {
  const month = num(mm)
  const year = num(yyyy)
  return {
    mm: month - 1 < 1 ? '12' : (month - 1).toString(),
    yyyy: month - 1 < 1 ? (year - 1).toString() : year.toString()
  }
}

export const getNextMonthYear = ({
  mm,
  yyyy
}: MonthDateParts): MonthDateParts => {
  const month = num(mm)
  const year = num(yyyy)
  return {
    mm: month + 1 > 12 ? '1' : (month + 1).toString(),
    yyyy: month + 1 > 12 ? (year + 1).toString() : year.toString()
  }
}

export const getMonthName = (mm: string): string =>
  [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][num(mm)]

export const parseDate = (value?: string): DateParts => {
  const [mm, dd, yyyy] = (value || '').split('/')
  return mm && dd && yyyy
    ? {
        dd: forceValidDay({ dd, mm, yyyy }),
        mm: forceValidMonth({ mm }),
        yyyy: forceValidYear({ yyyy })
      }
    : { dd: '', mm: '', yyyy: '' }
}

export const formatDate = (date?: DateParts): string | undefined => {
  if (!date) return

  const { mm, dd, yyyy } = date
  return mm && dd && yyyy ? mm + '/' + dd + '/' + yyyy : undefined
}

export function isNil(val: any) {
  // NOTE: i know this isn't strict equality, it's by design to also get NaN
  return val == null
}

export function shallowEqual(a: any, b: any) {
  if (a === b) return true
  if (isNil(a) || isNil(b)) return false

  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  if (bKeys.length !== aKeys.length) return false

  for (let i = 0; i < aKeys.length; i++) {
    const key = aKeys[i]

    if (a[key] !== b[key]) return false
  }

  return true
}
