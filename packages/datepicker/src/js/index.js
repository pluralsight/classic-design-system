const num = n => parseInt(n, 10)

export const getDaysInMonth = ({ mm, yyyy }) => new Date(yyyy, mm, 0).getDate()

export const forceValidDay = ({ dd, mm, yyyy }) => {
  const maxDays = getDaysInMonth({ mm, yyyy })
  const day = num(dd)
  return day > maxDays ? maxDays : day < 1 ? 1 : day
}

export const forceValidMonth = ({ mm }) => {
  const month = num(mm)
  return month > 12 ? 12 : month < 1 ? 1 : month
}

export const forceValidYear = ({ yyyy }) => {
  return new Date(yyyy, 1, 1).getFullYear()
}
