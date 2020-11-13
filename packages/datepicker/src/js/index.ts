export const arrayOf = (num: number): unknown[] => [...Array(num)]

export const getDaysInMonth = (date: Date): number => {
  const input = new Date(date)
  const nextMonth = input.getMonth() + 1
  const lastDayInPreviousMonth = 0
  input.setMonth(nextMonth)
  input.setDate(lastDayInPreviousMonth)
  return input.getDate()
}

export const getFirstDayOfWeekForMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDay()

export const getPrevMonthYear = (date: Date): Date => {
  const input = new Date(date)
  const month = input.getMonth()
  const year = input.getFullYear()
  const newMonth = month === 0 ? 11 : month - 1
  const newYear = newMonth === 11 && month === 0 ? year - 1 : year
  input.setMonth(newMonth)
  input.setFullYear(newYear)
  return input
}

export const getNextMonthYear = (date: Date): Date => {
  const input = new Date(date)
  const month = input.getMonth()
  const year = input.getFullYear()
  const newMonth = month === 11 ? 0 : month + 1
  const newYear = newMonth === 0 && month === 11 ? year + 1 : year
  input.setMonth(newMonth)
  input.setFullYear(newYear)
  return input
}

export const getMonthName = (date: Date): string =>
  date.toLocaleString('default', { month: 'long' })

export const areValidParts = (
  yyyy: number | undefined,
  mm: number | undefined,
  dd: number | undefined
): boolean => {
  if (!yyyy || !mm || !dd) return false
  else {
    if (isNaN(yyyy) || isNaN(mm) || isNaN(dd)) return false
    else if (mm < 1 || mm > 12) return false
    else {
      const validMonthYear = new Date(yyyy, mm - 1)
      const maxDays = getDaysInMonth(validMonthYear)
      if (dd < 1 || dd > maxDays) return false
      else return true
    }
  }
}

export const convertPartsToDate = (
  yyyy: number,
  mm: number,
  dd: number
): Date => {
  return new Date(yyyy, mm - 1, dd)
}

export const formatISO8601 = (date: Date): string => {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
