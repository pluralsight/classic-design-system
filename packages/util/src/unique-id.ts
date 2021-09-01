export const uniqueId = (prefix = '') => {
  const id = Math.random().toString(36).substr(2, 9)
  return String(prefix) + id
}

let idCounter = 0

export const generateId = (prefix = '') => {
  return prefix + String(idCounter++)
}

export const setIdCounter = (num: number) => {
  idCounter = num
}
