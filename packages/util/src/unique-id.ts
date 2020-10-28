export const uniqueId = (prefix = '') => {
  const id = Math.random().toString(36).substr(2, 9)
  return String(prefix) + id
}
