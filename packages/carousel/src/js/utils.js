export function chunk(arr, size) {
  if (!Array.isArray(arr)) throw new TypeError('#chunk input must be an array')
  if (!size || size <= 0) size = 1

  return arr.reduce((acc, item, index) => {
    if (index % size === 0) acc.push([item])
    else acc[acc.length - 1].push(item)

    return acc
  }, [])
}

export function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}

export function isFunction(fn) {
  return typeof fn === 'function'
}

export function isPlainObject(obj) {
  return obj && !Array.isArray(obj) && typeof obj === 'object'
}

export const uniqueId = (function() {
  let counter = 0

  const _unique = (prefix = '') => {
    counter++
    return String(prefix) + counter
  }

  _unique.reset = () => {
    counter = 0
  }

  return _unique
})()

export function pick(obj, props = []) {
  if (!isPlainObject(obj)) throw new TypeError('#pick input must be an object')

  return props.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) acc[key] = obj[key]
    return acc
  }, {})
}
