/* eslint-disable no-prototype-builtins */

export function isRef(obj) {
  return (
    obj !== null && typeof obj === 'object' && obj.hasOwnProperty('current')
  )
}
