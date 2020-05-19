export function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}

function isFunction(fn) {
  return typeof fn === 'function'
}
