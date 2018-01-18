import { colorByLetter, defaultColor } from '../vars'

export const getInitials = fullname => {
  if (!fullname || !fullname.length) return

  const names = fullname.trim().split(' ')

  const first = names[0][0]
  const second = names.length == 1 ? names[0][1] : names[names.length - 1][0]

  return `${first}${second}`.toUpperCase()
}

export const getColorByName = name => {
  const initial = name[0].toUpperCase() || null
  return colorByLetter[initial] || defaultColor
}
