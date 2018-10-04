export const debounce = (func, delay) => {
  if (typeof func !== 'function') {
    throw new Error('debounce expects a function as the first parameter')
  }
  if (typeof delay !== 'number') {
    throw new Error('debounce expects a number as the second parameter')
  }
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
