const num = n => parseInt(n, 10)

export const getDaysInMonth = ({ mm, yyyy }) => {
  const lastDayInPreviousMonth = 0
  return new Date(yyyy, mm, lastDayInPreviousMonth).getDate()
}

export const forceValidDay = ({ dd, mm, yyyy }) => {
  const maxDays = getDaysInMonth({ mm, yyyy })
  const day = num(dd)
  return day > maxDays ? maxDays : day < 1 ? 1 : day
}

export const forceValidMonth = ({ mm }) => {
  const month = num(mm)
  return month > 12 ? 12 : month < 1 ? 1 : month
}

export const forceValidYear = ({ yyyy }) => new Date(yyyy, 1, 1).getFullYear()

export const getFirstDayOfWeekForMonth = ({ mm, yyyy }) =>
  new Date(yyyy, num(mm) - 1, 1).getDay()

export const getPrevMonthYear = ({ mm, yyyy }) => {
  const month = num(mm)
  const year = num(yyyy)
  return {
    mm: month - 1 < 1 ? 12 : month - 1,
    yyyy: month - 1 < 1 ? year - 1 : year
  }
}

export const getNextMonthYear = ({ mm, yyyy }) => {
  const month = num(mm)
  const year = num(yyyy)
  return {
    mm: month + 1 > 12 ? 1 : month + 1,
    yyyy: month + 1 > 12 ? year + 1 : year
  }
}

export const getMonthName = mm =>
  [
    null,
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
