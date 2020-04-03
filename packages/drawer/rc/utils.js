/* eslint-disable no-prototype-builtins */

export const createActionCreator = type => dispatch => payload =>
  dispatch({ payload, type })

export const combineFns = (...fns) => (...args) =>
  fns.filter(isFunction).forEach(fn => fn(...args))

export const executeIfFunction = fn => (isFunction(fn) ? fn() : fn)

export const isDefined = val => typeof val !== 'undefined'

export const isFunction = fn => typeof fn === 'function'

export const noop = () => {}

export const persistSynthetic = evt => {
  if (!isFunction(evt.persist)) return
  evt.persist()
}

export const pick = (obj, keys) =>
  Object.keys(obj)
    .filter(key => keys.indexOf(key) >= 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})

export const removeUndefinedValues = obj =>
  Object.keys(obj)
    .filter(key => isDefined(obj[key]))
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})

export const switchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase

export const switchcaseF = cases => defaultCase => key =>
  executeIfFunction(switchcase(cases)(defaultCase)(key))

export const tap = msg => () => console.info(tap)
