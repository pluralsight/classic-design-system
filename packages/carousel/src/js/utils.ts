// TODO: pick out fns that can go to general utils
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

export const uniqueId = (prefix = '') => {
  const id = Math.random().toString(36).substr(2, 9)
  return String(prefix) + id
}

export function pick(obj, props = []) {
  if (!isPlainObject(obj)) throw new TypeError('#pick input must be an object')

  return props.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) acc[key] = obj[key]
    return acc
  }, {})
}

export function toValues(obj) {
  if (!isPlainObject(obj)) {
    throw new TypeError('#toValues input must be an object')
  }

  return Object.keys(obj).map(key => obj[key])
}
