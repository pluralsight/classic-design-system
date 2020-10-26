const num = n => parseInt(n, 10)

export const arrayOf = num => Array.apply(null, Array(num || 0))

export const getDaysInMonth = ({ mm, yyyy }) => {
  const lastDayInPreviousMonth = 0
  return new Date(yyyy, mm, lastDayInPreviousMonth).getDate()
}

export const forceValidDay = ({ dd, mm, yyyy } = {}) => {
  const maxDays = getDaysInMonth({ mm, yyyy })
  const day = num(dd)
  return isNaN(day) ? '' : day > maxDays ? maxDays : day < 1 ? 1 : day
}

export const forceValidMonth = ({ mm } = {}) => {
  const month = num(mm)
  return isNaN(month) ? '' : month > 12 ? 12 : month < 1 ? 1 : month
}

export const forceValidYear = ({ yyyy } = {}) =>
  isNaN(num(yyyy)) ? '' : new Date(yyyy, 1, 1).getFullYear()

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

export const parseDate = value => {
  const [mm, dd, yyyy] = (value || '').split('/')
  return mm && dd && yyyy
    ? {
        dd: forceValidDay({ dd, mm, yyyy }),
        mm: forceValidMonth({ mm }),
        yyyy: forceValidYear({ yyyy })
      }
    : { dd: '', mm: '', yyyy: '' }
}

export const formatDate = ({ mm, dd, yyyy } = {}) =>
  mm && dd && yyyy ? mm + '/' + dd + '/' + yyyy : null

export function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}

export function isFunction(fn) {
  return typeof fn === 'function'
}

export function isNil(val) {
  // NOTE: i know this isn't strict equality, it's by design to also get NaN
  return val == null
}

export function shallowEqual(a, b) {
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
