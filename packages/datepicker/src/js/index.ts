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
  const newMonth = month == 0 ? 11 : month - 1
  const newYear = newMonth === 11 && month === 0 ? year - 1 : year
  input.setMonth(newMonth)
  input.setFullYear(newYear)
  return input
}

export const getNextMonthYear = (date: Date): Date => {
  const input = new Date(date)
  const month = input.getMonth()
  const year = input.getFullYear()
  const newMonth = month == 11 ? 0 : month + 1
  const newYear = newMonth === 0 && month === 11 ? year + 1 : year
  input.setMonth(newMonth)
  input.setFullYear(newYear)
  return input
}

export const getMonthName = (date: Date): string =>
  date.toLocaleString('default', { month: 'long' })

export const areValidParts = (
  yyyy: string | undefined,
  mm: string | undefined,
  dd: string | undefined
): boolean => {
  if (!yyyy || !mm || !dd) return false
  else {
    const year = parseInt(yyyy, 10)
    const month1Based = parseInt(mm, 10)
    const day = parseInt(dd, 10)
    if (isNaN(year) || isNaN(month1Based) || isNaN(day)) return false
    else if (month1Based < 1 || month1Based > 12) return false
    else {
      const validMonthYear = new Date(year, month1Based - 1)
      const maxDays = getDaysInMonth(validMonthYear)
      if (day < 1 || day > maxDays) return false
      else return true
    }
  }
}

export const convertPartsToDate = (
  yyyy: string,
  mm: string,
  dd: string
): Date => {
  return new Date(parseInt(yyyy), parseInt(mm, 10) - 1, parseInt(dd, 10))
}

export const formatDate = (date: Date): string => {
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
}
