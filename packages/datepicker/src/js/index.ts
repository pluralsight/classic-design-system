export const arrayOf = (num: string): unknown[] =>
  // TODO: try spread
  // eslint-disable-next-line prefer-spread
  Array.apply(null, Array(parseInt(num, 10) || 0))

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

export const formatDate = (date: Date): string => {
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
}
