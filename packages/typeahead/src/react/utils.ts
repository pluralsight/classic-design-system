export function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}

export function isFunction(fn) {
  return typeof fn === 'function'
}

export function isPlainObject(obj) {
  return obj && !Array.isArray(obj) && typeof obj === 'object'
}

export function omit(obj, props = []) {
  if (!isPlainObject(obj)) throw new TypeError('#omit input must be an object')

  return Object.keys(obj).reduce((acc, key) => {
    if (props.indexOf(key) < 0) acc[key] = obj[key]
    return acc
  }, {})
}

export function pick(obj, props = []) {
  if (!isPlainObject(obj)) throw new TypeError('#pick input must be an object')

  return props.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) acc[key] = obj[key]
    return acc
  }, {})
}
