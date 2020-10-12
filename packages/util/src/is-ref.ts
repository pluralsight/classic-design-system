/* eslint-disable no-prototype-builtins */

export function isRef(obj: unknown) {
  return (
    obj !== null && typeof obj === 'object' && obj.hasOwnProperty('current')
  )
}
