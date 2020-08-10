import { isFunction } from '.'

export function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}
